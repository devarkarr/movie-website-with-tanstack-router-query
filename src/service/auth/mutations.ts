/** @format */

import axios from "axios";
import type { LoginPayload } from "./type";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

const login = async (payload: LoginPayload) => {
  const response = await axios.post(
    "https://fakestoreapi.com/auth/login",
    payload
  );
  return response.data;
};

export const useLogin = () => {
    
  const navigate = useNavigate();


  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data: { token: string }) => {
      Cookies.set("token", data.token, { expires: 7 });
      navigate({ to: "/dashboard" });
    },
  });
};
