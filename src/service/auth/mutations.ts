/** @format */

import axios from "axios";
import type { LoginPayload } from "./type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../../providers/auth-provider";

const login = async (payload: LoginPayload) => {
  const response = await axios.post(
    "https://fakestoreapi.com/auth/login",
    payload
  );
  return response.data;
};

export const useLogin = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data: { token: string }) => {
      dispatch({
        type: "SET_TOKEN",
        payload: data.token,
      });

      navigate({ to: "/dashboard", replace: true });
    },
  });
};
