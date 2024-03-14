"use client";
import React from "react";

export const getLocalStorage = (key: string) => {
  let data;
  if (typeof window !== undefined) {
    data = global?.localStorage?.getItem(key);
  }
  return data;
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== undefined) {
    global?.localStorage?.setItem(key, value);
  }
};
