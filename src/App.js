import UserPreferencePage from "./UserPreferencePage.jsx";
import ProfileCreationPage from "./ProfileCreationPage.jsx";
import VerifyEmailPage from "./EmailVerification/VerifyEmailPage.jsx";
import SignupPage from "./Signup/SignupPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignupPage />} />
                <Route path="/profile" element={<ProfileCreationPage />} />
                <Route path="/profile-preference" element={<UserPreferencePage />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
            </Routes>
        </BrowserRouter>
    );
}