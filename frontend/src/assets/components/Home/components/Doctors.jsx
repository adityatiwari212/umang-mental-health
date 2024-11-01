import "../styles/Doctors.css";
import React, { useEffect, useState } from "react";
import publicApi from "../../../../public_api"; // Adjust the path as necessary

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const location = "Mumbai"; // Replace with the actual location or fetch from user input
        const res = await publicApi.get(`/api/umang2/doctors/location/${location}`);
        setDoctors(res.data.doctors);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return <div>Loading doctors...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="headline">Connect with Doctors near you</div>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="doctors-card">
            <div className="image">
              <img
                src="https://pngimg.com/uploads/doctor/doctor_PNG15972.png"
                alt={`${doctor.name}`}
              />
            </div>
            <div className="name">{doctor.name}</div>
            <div className="description">
              {doctor.yearOfExp} years of experience, specializing in {doctor.speciality}.
            </div>
            <button className="contact-button">Get in Touch</button>
            <div className="location">
              <div className="village">{doctor.location}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Doctors;
