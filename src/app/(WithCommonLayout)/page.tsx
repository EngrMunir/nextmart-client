"use client"

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
    return (
        <div>
            <h1>Welcome To NextMart Home Page</h1>
        </div>
    );
};

export default HomePage;