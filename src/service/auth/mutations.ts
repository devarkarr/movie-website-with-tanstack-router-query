/** @format */

import axios from "axios";
import type { LoginPayload } from "./type";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../store/AuthStore";
import { useNavigate } from "@tanstack/react-router";

const login = async (payload: LoginPayload) => {
  const response = await axios.post(
    "https://fakestoreapi.com/auth/login",
    payload
  );
  return response.data;
};

export const useLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data: { token: string }) => {
      auth.setToken(data.token);
      navigate({ to: "/dashboard", replace: true });
    },
  });
};
