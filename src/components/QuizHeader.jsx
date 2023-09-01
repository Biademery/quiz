import { useNavigate } from "react-router-dom";

export function QuizHeader() {
  const navegate = useNavigate();
  const handleLogout = () => {
    navegate("/");
  };
  return (
    <div className="title">
      <h1>
        F <span style={{ color: "red" }}>.</span> R{" "}
        <span style={{ color: "aqua" }}>.</span> I{" "}
        <span style={{ color: "yellow" }}>.</span> E{" "}
        <span style={{ color: "red" }}>.</span> N{" "}
        <span style={{ color: "yellow" }}>.</span> D{" "}
        <span style={{ color: "aqua" }}>.</span> S
      </h1>
      <button className="icon-btn" onClick={handleLogout}>
        <img
          src="https://www.svgrepo.com/show/132889/logout.svg"
          alt="LogOut"
        />
      </button>
    </div>
  );
}
