import { useState, useEffect } from "react";

// 백엔드 API 주소.
// import.meta.env 는 Vite가 제공하는 환경변수 접근 객체.
// VITE_ 로 시작하는 변수만 브라우저 코드에 노출된다(보안상 중요).
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const card = { border: "1px solid #dfdccf", borderRadius: 10, padding: "18px 20px", marginBottom: 14, background: "#fff" };
const accent = "#8a5a2b";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/profile`)
      .then((res) => res.json())
      .then(setProfile)
      .catch(() => setError("백엔드 API 호출에 실패했습니다."));
  }, []);

  return (
    <div style={{ maxWidth: 640, margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif", color: "#132030" }}>
      <p><a href="/intro/index.html" style={{ color: accent }}>← 자기소개 페이지로 돌아가기</a></p>
      <h1 style={{ marginBottom: 4 }}>🔗 API 연동 실습</h1>
      <p style={{ color: "#5b6b7a", marginTop: 0 }}>
        이 페이지는 백엔드(<code>GET {API_URL}/profile</code>)에서 받아온 데이터를 그대로 렌더링합니다.
      </p>

      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {!profile && !error && <p>불러오는 중...</p>}

      {profile && (
        <>
          <div style={card}>
            <h2 style={{ margin: "0 0 6px" }}>{profile.name}</h2>
            <p style={{ margin: 0 }}>{profile.headline}</p>
          </div>

          <div style={card}>
            <div style={{ color: accent, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>CURRENT ROLE</div>
            <h3 style={{ margin: "0 0 4px" }}>{profile.role.company} · {profile.role.title}</h3>
            <div style={{ color: "#5b6b7a", fontSize: 14, marginBottom: 8 }}>
              {profile.role.location} · {profile.role.period}
            </div>
            <p style={{ margin: 0 }}>{profile.role.description}</p>
          </div>

          <div style={card}>
            <div style={{ color: accent, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>EDUCATION</div>
            {profile.education.map((e, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <b>{e.school}</b> — {e.detail}
                <div style={{ color: "#5b6b7a", fontSize: 13 }}>{e.period}</div>
              </div>
            ))}
          </div>

          <div style={card}>
            <div style={{ color: accent, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>PUBLICATIONS</div>
            {profile.publications.map((p, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: accent, fontWeight: 600 }}>
                  {p.title} ↗
                </a>
                <div style={{ color: "#5b6b7a", fontSize: 13 }}>{p.summary}</div>
              </div>
            ))}
          </div>

          <div style={card}>
            <div style={{ color: accent, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>INTERESTS</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {profile.interests.map((tag, i) => (
                <span key={i} style={{ border: `1px solid ${accent}`, borderRadius: 20, padding: "4px 12px", fontSize: 13 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={card}>
            <div style={{ color: accent, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>CONNECT</div>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: 16, color: accent }}>LinkedIn ↗</a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" style={{ color: accent }}>GitHub ↗</a>
          </div>
        </>
      )}
    </div>
  );
}
