'use client';

export default function TeamCarousel({ team }) {
  return (
    <div className="team-carousel-viewport">
      <div className="team-grid">
        {team.map(([name, role, image]) => <article key={name}>
          <div className="team-photo"><img src={image} alt={name} /></div>
          <h3>{name}</h3>
          <p>{role}</p>
        </article>)}
      </div>
    </div>
  );
}
