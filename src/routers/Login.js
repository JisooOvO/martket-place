import styled from "styled-components";
import { BACKENDURL } from "../common/Backend";

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.75rem;
`;

const Input = styled.input`
  height: 3.5rem;
  margin-bottom: 1.75rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-width: 1px;
  border-radius: 0.75rem;
`;

const LoginNavWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const LoginForm = styled.form`
  padding: 2.5rem;
  margin: 5rem auto 5rem auto;
  width: 75%;
  max-width: 40rem;
  border-width: 1px;
  border-radius: 0.75rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const Button = styled.button`
  width: 100%;
  color: white;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  background-color: rgb(96 165 250);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.75rem;
`;

const Line = styled.hr`
  width: 100%;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const LoginFooter = styled.div`
  text-align: center;
  color: rgb(107 114 128);
`;

const Signup = styled.span`
  color: black;
  padding-left: 1rem;
`;

const FormInput = (props) => {
  return (
    <FormInputContainer>
      <Label>{props.title}</Label>
      <Input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
      />
    </FormInputContainer>
  );
};

const LoginNav = () => {
  return (
    <LoginNavWrapper>
      <p>아이디 찾기</p>
      <p>비밀번호 찾기</p>
    </LoginNavWrapper>
  );
};

const loginData = [
  {
    key: 1,
    title: "아이디",
    name: "username",
    type: "text",
    placeholder: "아이디",
    required: true,
    pattern: "[a-z0-9]{3,9}",
  },
  {
    key: 2,
    title: "비밀번호",
    name: "password",
    type: "text",
    placeholder: "비밀번호",
    required: true,
    pattern: "[a-z0-9]{3,9}",
  },
];

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());

    // 나중에 API로 정리
    fetch(BACKENDURL + "/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Title>LOGIN</Title>
      {loginData.map((item) => (
        <FormInput {...item} />
      ))}
      <LoginNav />
      <Button>로그인</Button>
      <Line />
      <LoginFooter>
        회원이 아니신가요? <Signup>회원가입</Signup>
      </LoginFooter>
    </LoginForm>
  );
};

export default Login;
