import { FormEvent, MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
};

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setClosing(false);
      dialog.showModal();
    }
    if (!open && dialog.open && !closing) dialog.close();
  }, [open]);

  useEffect(() => () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    if (closing) return;
    setClosing(true);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    closeTimerRef.current = window.setTimeout(() => {
      dialogRef.current?.close();
      setSubmitted(false);
      setClosing(false);
      onClose();
    }, reducedMotion ? 0 : 280);
  };

  const closeFromBackdrop = (event: ReactMouseEvent<HTMLDialogElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (outside) close();
  };

  return (
    <dialog
      className={`waitlist-modal${closing ? ' is-closing' : ''}`}
      ref={dialogRef}
      onClick={closeFromBackdrop}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
    >
      <button className="modal-close" type="button" onClick={close}>Close</button>
      {submitted ? (
        <div className="waitlist-success" aria-live="polite">
          <span className="section-kicker">You're on the list</span>
          <h2>We’ll be in touch.</h2>
          <p>Thanks for joining the beSeen private beta.</p>
          <button className="button button--primary" type="button" onClick={close}>Done</button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <span className="section-kicker">Private beta</span>
          <h2>Get seen sooner.</h2>
          <p>Leave your email and we’ll let you know when access opens.</p>
          <label htmlFor="waitlist-email">Email address</label>
          <input id="waitlist-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required autoFocus />
          <button className="button button--primary" type="submit">Join Waitlist</button>
        </form>
      )}
    </dialog>
  );
}
