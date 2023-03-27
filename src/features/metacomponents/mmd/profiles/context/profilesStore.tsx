import { create } from "zustand";
import { IAttribute, IData, IDataSection } from "types/mmd/mmd.types";
import { useState } from "react";


export interface IProfilesStore {
  updateProfile:boolean
  setUpdateProfile:(updateProfile:boolean) => void
  profileId:number
  setProfileId:(profileId:number) => void
  profileName: string
  setProfileName: (profileName: string) => void
  profileDescription: string
  setProfileDescription: (profileName: string) => void
  creatorProfile: string
  setCreatorProfile: (profileName: string) => void
}

export const useProfileStore = create<IProfilesStore>(set => ({
  updateProfile:false,
  profileId:0,
  profileName: '',
  profileDescription: '',
  creatorProfile:'',
  setUpdateProfile: (value: boolean) => set({ updateProfile: value }),
  setProfileId: (value: number) => set({ profileId: value }),
  setProfileName: (value: string) => set({ profileName: value }),
  setProfileDescription: (value: string) => set({ profileDescription: value }),
  setCreatorProfile: (value: string) => set({ creatorProfile: value }),
}));