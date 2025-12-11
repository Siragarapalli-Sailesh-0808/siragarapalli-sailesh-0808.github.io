/**
 * Certifications Component
 * Modern, trendy design showcasing verified certifications
 */

import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Front End Web Developer",
      issuer: "Infosys Springboard",
      issuerIcon: "🚀",
      status: "Verified",
      color: "blue",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      date: "2024"
    },
    {
      id: 2,
      title: "Cisco Certified Network Associate",
      issuer: "Cisco",
      issuerIcon: "🌐",
      status: "Verified",
      color: "teal",
      skills: ["Networking", "CCNA", "Network Security"],
      date: "2024"
    },
    {
      id: 3,
      title: "Oracle AI Vector Search Professional",
      issuer: "Oracle",
      issuerIcon: "🔍",
      status: "Verified",
      color: "orange",
      skills: ["AI", "Vector Search", "Oracle DB", "Machine Learning"],
      date: "2024"
    },
    {
      id: 4,
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      issuerIcon: "☁️",
      status: "Verified",
      color: "cyan",
      skills: ["Salesforce", "AI", "CRM", "Cloud Computing"],
      date: "2024"
    },
    {
      id: 5,
      title: "Cisco Cybersecurity Certification",
      issuer: "Cisco",
      issuerIcon: "🔒",
      status: "Verified",
      color: "green",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
      date: "2024"
    }
  ];

  return (
    <section className="certifications-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">
            <span className="icon">🎓</span>
            CERTIFICATIONS
          </span>
          <h2 className="section-title">
            Credentials That <span className="gradient-text">Count</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications validating my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`certification-card ${cert.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-header">
                <div className="issuer-info">
                  <div className="issuer-icon">{cert.issuerIcon}</div>
                  <div className="issuer-details">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
                <div className="cert-status">
                  <span className="status-badge">
                    <span className="status-icon">✓</span>
                    {cert.status}
                  </span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
              
              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="cert-stats">
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Verified</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2024</div>
            <div className="stat-label">Latest Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;