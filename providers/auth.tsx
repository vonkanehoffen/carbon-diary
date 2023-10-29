import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { supabase } from "../services/supabase";
import { Session } from "@supabase/supabase-js";

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

export const AuthContext = createContext<Partial<ContextProps>>({});

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
}

export const AuthProvider = (props: PropsWithChildren) => {
  // user null = loading
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log(`Supabase auth getSession:`, data);
      setSession(data.session);
      setUser(session ? true : false);
    })();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(`Supabase auth event:`, event);
        setSession(session);
        setUser(session ? true : false);
      },
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
