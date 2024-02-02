import { BACKENDURL } from "../common/Backend";

const FormInput = (props) => {
  return (
    <div className="flex flex-col">
      <label className="mb-3">{props.title}</label>
      <input
        className="border mb-7 h-12 rounded-xl px-2"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
      />
    </div>
  );
};

const LoginNav = () => {
  return (
    <div className="flex justify-between mb-10">
      <div className="flex gap-4">
        <p>아이디 찾기</p>
        <p>비밀번호 찾기</p>
      </div>
      <p>회원가입</p>
    </div>
  );
};

const loginData = [
  {
    id: 1,
    title: "아이디",
    name: "username",
    type: "text",
    placeholder: "아이디",
    required: true,
    pattern: "[a-z0-9]{3,9}",
  },
  {
    id: 2,
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
    <form
      onSubmit={handleSubmit}
      className="px-10 py-10 my-20 border w-3/4 mx-auto rounded-xl shadow-md"
    >
      <h2 className="text-2xl mb-10">LOGIN</h2>
      {loginData.map((item) => (
        <FormInput
          key={`formkey${item.id}`}
          title={item.title}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          required={item.required}
          pattern={item.pattern}
        />
      ))}
      <LoginNav />
      <button className="w-full py-5 text-xl font-bold bg-blue-400 text-white rounded-xl shadow-md">
        로그인
      </button>
    </form>
  );
};

export default Login;
