"use client";
import { signup } from "@/api/auth/signup";
import { SignupInfo } from "@/models/User";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignupInfo>({
    username: "",
    nickname: "",
    password: "",
  });
  const [checkPw, setCheckPw] = useState("");
  const [pwMismatch, setPwMismatch] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== checkPw) setPwMismatch(true);
    else
      signup(formData)
        .then(() => router.push("/login"))
        .catch((e) => setErrorMsg(e.message));
  };

  return (
    <div className="container is-flex is-justify-content-center mt-6">
      <div className="column is-one-third is-offset-one-third">
        <h1 className="title has-text-centered">회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">아이디</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">닉네임</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="nickname"
                value={formData.nickname}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">비밀번호 확인</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="checkPw"
                value={checkPw}
                onChange={(e) => setCheckPw(e.target.value)}
                required
              />
              {pwMismatch && (
                <p className="help is-danger">비밀번호가 일치하지 않습니다.</p>
              )}
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary is-fullwidth">
                회원가입
              </button>
              {errorMsg && <p className="help is-danger">{errorMsg}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
