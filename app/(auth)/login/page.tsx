"use client";
import { login } from "@/api/auth";
import { LoginInfo } from "@/models/User";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

const SignupPage: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginInfo>({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginData)
      .then(() => router.replace("/"))
      .catch((e) => setErrorMsg(e.message));
  };

  return (
    <div className="container is-flex is-justify-content-center mt-6">
      <div className="column is-one-third is-offset-one-third">
        <h1 className="title has-text-centered">로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">아이디</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">비밀번호</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary is-fullwidth">
                로그인
              </button>
              {errorMsg && <p className="help is-danger">{errorMsg}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
