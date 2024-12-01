import { fetchUser } from "@/api/auth";
import Link from "next/link";
import NavBarToggle from "./NavBarToggle";

const NavBar: React.FC = async () => {
  const user = await fetchUser();
  return (
    <nav
      className="navbar ml-5 mr-5"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/" className="navbar-item">
          <strong>메인</strong>
        </Link>
        <NavBarToggle />
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link href="/article" className="navbar-item">
            게시판
          </Link>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {user ? (
              <div className="buttons is-right">
                <Link href="/mypage" className="button is-light">
                  Hello, {user.nickname}!
                </Link>
                <Link href="/logout" className="button is-danger">
                  로그아웃
                </Link>
              </div>
            ) : (
              <div className="buttons is-right">
                <Link href="/login" className="button is-light">
                  로그인
                </Link>
                <Link href="/signup" className="button is-primary">
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
