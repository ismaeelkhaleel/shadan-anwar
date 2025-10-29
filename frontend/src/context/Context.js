"use client";
import React, { createContext, useContext, useState } from "react";
import {
  getEducationAPI,
  getExperienceAPI,
  getProfileAPI,
  getProjectsAPI,
  getSkillsAPI,
  sendContactMessageAPI,
  getBlogDetailAPI,
  getProjectDetailAPI,
  getSocialLinksAPI,
} from "@/services/api";

import toast, { Toaster } from "react-hot-toast";
const Context = createContext(null);

export const Provider = ({ children }) => {
  const [profile, setProfile] = useState([]);
  const getProfile = async () => {
    try {
      const res = await getProfileAPI();
      const data = await res.json();
      if (res.ok) {
        setProfile(data.profile[0]);
      }
    } catch (err) {
      toast.error("Some error while fetching profile");
    }
  };
  const [education, setEducation] = useState([]);
  const getEducation = async () => {
    try {
      const res = await getEducationAPI();
      const data = await res.json();
      if (res.ok) {
        setEducation(data.education);
      }
    } catch (err) {
      toast.error("Some error while fetching education");
    }
  };
  const [experience, setExperience] = useState([]);
  const getExperience = async () => {
    try {
      const res = await getExperienceAPI();
      const data = await res.json();
      if (res.ok) {
        setExperience(data.experience);
      }
    } catch (err) {
      toast.error("Some error while fetching experience");
    }
  };
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const res = await getProjectsAPI();
      const data = await res.json();
      if (res.ok) {
        setProjects(data.projects);
      }
    } catch (err) {
      toast.error("Some error while fetching projects");
    }
  };
  const [skills, setSkills] = useState([]);
  const getSkills = async () => {
    try {
      const res = await getSkillsAPI();
      const data = await res.json();
      if (res.ok) {
        setSkills(data.skills);
      }
    } catch (err) {
      toast.error("Some error while fetching skills");
    }
  }; 
   
  const sendContactMessage = async (name, email, message) => {
    try {
      const res = await sendContactMessageAPI(name, email, message);
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Can not send message, try again");
      } else {
        toast.success(data.message || "Message sent");
      }
    } catch (err) {
      toast.error("Some error while sending message");
    }
  };
  const [projectDetail, setProjectDetail] = useState([]);
  const getProjectDetail = async (projectId) => {
    try {
      const res = await getProjectDetailAPI(projectId);
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Can not Fetch detail, try again");
      } else {
        setProjectDetail(data.projectDetails);
      }
    } catch (err) {
      toast.error("Some error while fetching Project detail");
    }
  };
  const [socials, setSocials] = useState([]);
  const getSocialLinks = async () => {
    try {
      const res = await getSocialLinksAPI();
      const data = await res.json();
      if (res.ok) {
        setSocials(data.socialLinks);
      } else {
        toast.error(data.message || "Some error while fetching social links");
      }
    } catch (err) {
      toast.error("Some error while fetching social links");
    }
  };
  return (
    <Context.Provider
      value={{
        getProfile,
        profile,
        getEducation,
        education,
        getExperience,
        experience,
        getProjects,
        projects,
        getSkills,
        skills,
        sendContactMessage,
        getProjectDetail,
        projectDetail,
        getSocialLinks,
        socials,
      }}
    >
      {children}
      <Toaster position="top-right"></Toaster>
    </Context.Provider>
  );
};

export const useUser = () => useContext(Context);
