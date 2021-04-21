import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./navbar.component"
import MainContainer from "./main-container.component"

/*
import Navbar from "./navbar.component"
import Home from "./home.component"
import LoginBot from "./loginBot.component"
import StartApp from "./startApp.component"
import SetBotStatus from "./set-bot-status.component"
import Footer from "./footer.component"

*/

/*

const routes = [
  {
    path: "/home",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home/>
  },
  {
    path: "/startApp",
    sidebar: () => <div>start app</div>,
    main: () => <StartApp/>
  },
  {
    path: "/loginbot",
    sidebar: () => <div>log in Bot</div>,
    main: () => <LoginBot/>
  },
  {
    path: "/setbotstatus",
    exact: true,
    sidebar: () => <div>Set bot Status</div>,
    main: () => <SetBotStatus/>
  },
  {
    path: "/setup-command-listener",
    sidebar: () => <div>Set Up Command Listener</div>,
    main: () => <h2>Set Up Command Listener</h2>
  },
  {
    path: "/send-messaage-to-all-channel",
    sidebar: () => <div>Send Message to all Channel</div>,
    main: () => <h2>Send Message to all Channel</h2>
  },
  {
    path: "/send-message-channel",
    sidebar: () => <div>Send Message Channel</div>,
    main: () => <h2>Send Message Channel</h2>
  }
  
]; */

export default function Main() {
  return (
    <div>
      <Navbar/>
      <MainContainer/>
    </div>
    
  );
}