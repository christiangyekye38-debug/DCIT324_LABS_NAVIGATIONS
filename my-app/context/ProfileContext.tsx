import { createContext, ReactNode, useContext, useState } from 'react';

type Profile = {
  name: string;
  bio: string;
  programme: string;
  level: string;
  indexNumber: string;
};

type ProfileContextValue = {
  profile: Profile;
  updateProfile: (updates: Partial<Profile>) => void;
};

const defaultProfile: Profile = {
  name: 'Christian Gyekye',
  bio: 'Undergraduate student at Campus Connect',
  programme: 'Computer Science',
  level: '200',
  indexNumber: '10912345',
};

const ProfileContext = createContext<ProfileContextValue | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);

  const updateProfile = (updates: Partial<Profile>) => {
    setProfile((current) => ({
      ...current,
      ...updates,
    }));
  };

  return <ProfileContext.Provider value={{ profile, updateProfile }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
}
