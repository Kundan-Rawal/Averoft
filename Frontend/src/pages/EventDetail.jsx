import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  if (!event) return <p className="p-4">Loading...</p>;

  const handleBooking = async () => {
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: event.id, user_id: 1 }), // replace with logged user
    });
    const data = await res.json();
    alert(data.message || "Booked!");
  };

  return (
    <div className="p-6 flex flex-col items-center w-[100%]">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p>
        <b>Location:</b> {event.location}
      </p>
      <p>
        <b>Date:</b> {new Date(event.event_date).toLocaleString()}
      </p>
      <button
        onClick={handleBooking}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Book Event
      </button>
    </div>
  );
};

export default EventDetail;
