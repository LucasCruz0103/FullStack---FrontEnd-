import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

interface IAuthContextProps {
  children: React.ReactNode;
}

export interface IContactsInfo {
  id: string;
  fullName: string;
  telephone: string;
  email: string;
  createdAt: string;
}

interface IUserInfo {
  id: string;
  fullName: string;
  telephone: string;
  email: string;
  createdAt: string;
  contacts: IContactsInfo[];
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  fullName: string;
  email: string;
  password: string;
  confirmPass: string;
  telephone: string;
}

interface IAuthContext {
  userInfo: IUserInfo;
  token: string | null;
  userId: string | null;
  login: (user: ILogin) => void;
  signUp: (user: ISignUp) => void;
  deleteUser: () => void;
  registerContact: (contact: IContactsInfo) => void;
  showModalRegister: boolean;
  setShowModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IDecodedToken {
  sub: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContextProps) => {
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("@user:Token");
  const userId: string | null = localStorage.getItem("@user:ID");

  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
  const [showModalRegister, setShowModalRegister] = useState<boolean>(false);

  const login = (user: ILogin) => {
    Api.post("/users/login", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@user:Token", res.data.token);
        const decodedToken = jwtDecode(res.data.token) as IDecodedToken;
        const userId = decodedToken.sub;
        window.localStorage.setItem("@user:ID", userId);
        toast.success("Login bem sucedido!");
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos!");
      });
  };

  const signUp = (user: ISignUp) => {
    Api.post("/users", { ...user })
      .then((res) => {
        toast.success("Cadastro efetuado com sucesso");
        setShowModalRegister(false);
      })
      .catch((err) => {
        toast.error("E-mail já cadastrado!");
      });
  };

  const registerContact = (contact: IContactsInfo) => {
    Api.post(
      "/contacts",
      { ...contact },
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((res) => {
        toast.success("Contato registrado com sucesso!");
      })
      .catch((err) => {
        toast.error("Algo deu errado, tente novamente!");
      });
  };

  useEffect(() => {
    token &&
      Api.get<IUserInfo>(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => {
          window.localStorage.clear();
          navigate("/login");
        });
  }, []);

  function deleteUser() {
    Api.delete(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      window.localStorage.clear();
      toast.success("Sua conta foi deletada com sucesso!");
      navigate("/login");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        userInfo,
        login,
        signUp,
        registerContact,
        setShowModalRegister,
        showModalRegister,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
