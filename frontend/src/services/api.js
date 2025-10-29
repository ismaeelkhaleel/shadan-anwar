import { useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const getProfileAPI = async () => {
  const response = await fetch(`${BASE_URL}/get-profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const getEducationAPI = async () => {
  const response = await fetch(`${BASE_URL}/get-education`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const getExperienceAPI = async () => {
  const response = await fetch(`${BASE_URL}/get-experience`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const getProjectsAPI = async () => {
  const response = await fetch(`${BASE_URL}/get-projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const getSkillsAPI = async () => {
  const response = await fetch(`${BASE_URL}/get-skills`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export const sendContactMessageAPI = async (name, email, message) => {
  const response = await fetch(`${BASE_URL}/contact/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  return response;
};
export const getProjectDetailAPI = async (projectId) => {
  const response = await fetch(`${BASE_URL}/get-project-detail/${projectId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getSocialLinksAPI = async () => {
  const response = await fetch(`${BASE_URL}/get-social-links`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
