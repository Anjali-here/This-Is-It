import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { branches } from './data';

const inputClass =
  'w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors';
const labelClass = 'block text-xs uppercase tracking-wider text-muted-foreground mb-2';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  party_size: '2',
  branch: branches[0]?.name || '',
  special_requests: '',
};

export default function ReservationForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checkAvailability = () => {
    setStatus('checking');
    setTimeout(() => setStatus('available'), 1200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await base44.entities.Reservation.create({
        ...form,
        party_size: Number(form.party_size),
        status: 'pending',
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const reset = () => {
    setForm(emptyForm);
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading text-3xl mb-3">Reservation Requested!</h3>
        <p className="text-muted-foreground mb-6">We'll confirm your booking via email shortly.</p>
        <button onClick={reset} className="text-primary underline text-sm">
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="res-name">Full Name</label>
          <input id="res-name" name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
        </div>
        <div>
          <label className={labelClass} htmlFor="res-phone">Phone</label>
          <input id="res-phone" name="phone" value={form.phone} onChange={handleChange} required className={inputClass} placeholder="+91 98765 43210" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="res-email">Email</label>
        <input id="res-email" name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass} htmlFor="res-date">Date</label>
          <input id="res-date" name="date" type="date" value={form.date} onChange={handleChange} required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="res-time">Time</label>
          <input id="res-time" name="time" type="time" value={form.time} onChange={handleChange} required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="res-party">Guests</label>
          <select id="res-party" name="party_size" value={form.party_size} onChange={handleChange} required className={inputClass}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="res-branch">Branch</label>
        <select id="res-branch" name="branch" value={form.branch} onChange={handleChange} required className={inputClass}>
          {branches.map((b) => (
            <option key={b.name} value={b.name}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="res-requests">Special Requests</label>
        <textarea
          id="res-requests"
          name="special_requests"
          value={form.special_requests}
          onChange={handleChange}
          rows={3}
          className={inputClass}
          placeholder="Any dietary requirements or seating preferences..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-destructive">Something went wrong. Please try again or call us directly.</p>
      )}

      <button
        type="button"
        onClick={checkAvailability}
        disabled={!form.date || !form.time || status === 'checking' || status === 'submitting' || status === 'available'}
        className="w-full border border-accent text-accent py-3 rounded-full text-sm uppercase tracking-wider hover:bg-accent/5 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'checking' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Checking availability...
          </>
        ) : status === 'available' ? (
          '✓ Availability Confirmed'
        ) : (
          'Check Availability'
        )}
      </button>

      {status === 'available' && (
        <p className="text-sm text-green-600 flex items-center gap-2">
          <Check className="w-4 h-4" /> Tables available for your selected time!
        </p>
      )}

      <button
        type="submit"
        disabled={status !== 'available' || status === 'submitting'}
        className="w-full bg-primary text-white py-3 rounded-full text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Booking...
          </>
        ) : (
          'Confirm Reservation'
        )}
      </button>
    </form>
  );
}
