import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { PlusIcon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

interface Guest {
  firstName: string;
  lastName: string;
}

interface RsvpSubmission {
  lastName: string;
  firstName: string;
  attending: "yes" | "no" | "";
  guests: Guest[];
  message: string;
  submittedAt: string;
}

const STORAGE_KEY = "rsvpSubmissions";
const REDIRECT_SECONDS = 20;

const RsvpPage = () => {
  const navigate = useNavigate();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [guests, setGuests] = useState<Guest[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  const addGuest = () => setGuests((g) => [...g, { firstName: "", lastName: "" }]);

  const removeGuest = (index: number) =>
    setGuests((g) => g.filter((_, i) => i !== index));

  const updateGuest = (index: number, field: keyof Guest, value: string) =>
    setGuests((g) =>
      g.map((guest, i) => (i === index ? { ...guest, [field]: value } : guest))
    );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const submission: RsvpSubmission = {
      lastName,
      firstName,
      attending,
      guests: guests
        .map((guest) => ({
          firstName: guest.firstName.trim(),
          lastName: guest.lastName.trim(),
        }))
        .filter((guest) => guest.firstName || guest.lastName),
      message,
      submittedAt: new Date().toISOString(),
    };

    const existing: RsvpSubmission[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "[]"
    );
    existing.push(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted) return;

    if (secondsLeft <= 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [submitted, secondsLeft, navigate]);

  return (
    <div className="min-h-dvh bg-blush text-stone-800 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-xl">
          <div className="text-center mb-12">
            <h1 className="font-cursive text-2xl md:text-5xl font-serif text-slate-800 mb-4">
              Gian Arnold & Aileen
            </h1>
            <div className="h-1 w-24 bg-dusty-rose mx-auto mb-4"></div>
            <p className="text-stone-500 italic text-sm md:text-base">
              Kindly confirm your attendance on or before September 12, 2026.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center space-y-4">
              <p className="text-xs uppercase tracking-widest text-stone-400">
                Redirecting to home in {secondsLeft}s...
              </p>
              <CheckCircleIcon className="h-16 w-16 text-dusty-rose mx-auto" />
              <h2 className="text-xl md:text-2xl font-serif text-slate-800">
                Thank you, {firstName}!
              </h2>
              <p className="text-stone-500">
                {attending === "yes"
                  ? "We can't wait to celebrate with you."
                  : "We'll miss you, but thank you for letting us know."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm uppercase tracking-widest text-stone-500">
                    First Name <span className="text-dusty-rose">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-b border-stone-300 focus:border-dusty-rose outline-none py-2 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm uppercase tracking-widest text-stone-500">
                    Last Name <span className="text-dusty-rose">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border-b border-stone-300 focus:border-dusty-rose outline-none py-2 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="attending" className="text-sm uppercase tracking-widest text-stone-500">
                  Will you be attending our wedding? <span className="text-dusty-rose">*</span>
                </label>
                <select
                  id="attending"
                  required
                  value={attending}
                  onChange={(e) => setAttending(e.target.value as "yes" | "no")}
                  className="border-b border-stone-300 focus:border-dusty-rose outline-none py-2 bg-transparent transition-colors"
                >
                  <option value="" disabled>
                    Please select an answer
                  </option>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, I won't be able to attend.</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-sm uppercase tracking-widest text-stone-500">
                    Names of Guests Attending with You
                  </label>
                  <p className="text-xs text-stone-500 italic mt-1">
                    If applicable, please list the full names of your companions.
                  </p>
                </div>

                {guests.map((guest, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-1 flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        placeholder={`Guest ${index + 1} first name`}
                        value={guest.firstName}
                        onChange={(e) => updateGuest(index, "firstName", e.target.value)}
                        className="flex-1 border-b border-stone-300 focus:border-dusty-rose outline-none py-2 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder={`Guest ${index + 1} last name`}
                        value={guest.lastName}
                        onChange={(e) => updateGuest(index, "lastName", e.target.value)}
                        className="flex-1 border-b border-stone-300 focus:border-dusty-rose outline-none py-2 transition-colors"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeGuest(index)}
                      aria-label="Remove guest"
                      className="mt-2 text-stone-400 hover:text-dusty-rose transition-colors"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addGuest}
                  className="self-start flex items-center gap-1 text-sm text-dusty-rose hover:text-[#A8677A] transition-colors mt-1"
                >
                  <PlusIcon className="h-4 w-4" />
                  Add Guest
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm uppercase tracking-widest text-stone-500">
                  Additional Message for the Couple
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-b border-stone-300 focus:border-dusty-rose outline-none py-2 resize-none transition-colors"
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-12 py-4 bg-dusty-rose text-white rounded-full hover:bg-[#A8677A] transition-all duration-300 transform hover:scale-105 shadow-lg tracking-widest uppercase text-sm"
                >
                  Submit RSVP
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default RsvpPage;
