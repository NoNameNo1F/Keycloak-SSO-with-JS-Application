<!--
Hey, thanks for using the awesome-readme-template template.
If you have any enhancements, then fork this project and create a pull request
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div aligns="center">

  <img src="assests/logo.png" alt="logo" width="200" height="auto" />
  <h1>Keycloak-SSO-with-JS-Application</h1>
  
  <p>
    Keycloak is an Open Source Identity and Access Management solution for modern Applications and Services.

    This repository contains the source code for the Keycloak Javascript.js adapter. This module makes it simple to implement a Javascript.js Connect-friendly application that uses Keycloak for its authentication and authorization needs.

  </p>

  <p>
    Demo Single Sign-On by using Keycloak into Javascript Application 
  </p>
  
  
<!-- Badges -->
<p>
  <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/NoNameNo1F/Keycloak-SSO-with-JS-Application" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/NoNameNo1F/Keycloak-SSO-with-JS-Application" alt="last update" />
  </a>
  <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/network/members">
    <img src="https://img.shields.io/github/forks/NoNameNo1F/Keycloak-SSO-with-JS-Application" alt="forks" />
  </a>
  <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/stargazers">
    <img src="https://img.shields.io/github/stars/NoNameNo1F/Keycloak-SSO-with-JS-Application" alt="stars" />
  </a>
  <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/issues/">
    <img src="https://img.shields.io/github/issues/NoNameNo1F/Keycloak-SSO-with-JS-Application" alt="open issues" />
  </a>
  <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/NoNameNo1F/Keycloak-SSO-with-JS-Application.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/">Documentation</a>
  <span> · </span>
    <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
  - [Color Reference](#art-color-reference)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
- [Usage](#eyes-usage)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)
- [Documentation](#book-documentation)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div aligns="center"> 
  <img src="./assests/img/Demo.png" alt="screenshot" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://js.org/">Javascript</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://keycloak.org">Keycloak</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
</details>

<details>
<summary>DevOps</summary>
</details>

<!-- Features -->

### :dart: Features

- Authentication user want to use the application at the first time
- Login/Logout
- Update Token

<!-- Color Reference -->

### :art: Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Primary Color   | ![#7367DA](https://via.placeholder.com/10/7367DA?text=+) #7367DA |
| Secondary Color | ![#1e085a](https://via.placeholder.com/10/1e085a?text=+) #1e085a |
| Accent Color    | ![#f2f2f2](https://via.placeholder.com/10/f2f2f2?text=+) #f2f2f2 |
| Text Color      | ![#dddddd](https://via.placeholder.com/10/dddddd?text=+) #dddddd |

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

Install and setup environment OpenJDKs to run Keycloak, keep up-to-date java/javac lastest version.

```bash
  sudo apt-get update
  sudo apt install default-jre
  or
  sudo apt install defailt-jdk
```

Configure JAVA_HOME Path

```bash
  update-alternatives --config java
  #Add JAVA_HOME to the environment
  sudo nano /etc/environment
  #then parse it
  JAVA_HOME="JAVA_HOME=/lib/jvm/java-11-openjdk-amd64/bin/java"
  #force reload the environment configuration file
  source /etc/environment
```

<!-- Installation -->

### :gear: Installation

This project is running Keycloak version 21.0.2, so keep up-to-date.
After download the zip file, we unzip and run it at localhost:8080

```bash
  cd ./keycloak-21.0.2
  bin/kc.sh start-dev
```

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application.git
```

Go to the project directory

```bash
  cd Keycloak-SSO-with-JS-Application
```

Install dependencies

```bash
  npm init
  npm install express
  npm install keycloak-js
```

Start the server

```bash
  node index.js
```

<!-- Usage -->

## :eyes: Usage

This project is only for demonstration SSO based-on Open Source: Keycloak, which uses Identify Provider for authentication user login after User is authenticated they can use the application.

<!-- Contributing -->

## :wave: Contributing

<a href="https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=NoNameNo1F/Keycloak-SSO-with-JS-Application" />
</a>

Contributions are always welcome!

See `contributing.md` for ways to get started.

<!-- License -->

## :warning: License

Distributed under the no License. See LICENSE.txt for more information.

<!-- Contact -->

## :handshake: Contact

Nguyễn Cao Nam Vũ - [@NoNameNo1F](linkedin.com/in/vu-nguyen-a61a83235) - NoNameNo1F@gmail.com

Project Link: [https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application](https://github.com/NoNameNo1F/Keycloak-SSO-with-JS-Application)

<!-- Acknowledgments -->

## :gem: Acknowledgements

- [Awesome README](https://github.com/Louis3797/awesome-readme-template)

<!-- Documentation -->

## :book: Documentation

Due to based on an open source , we recommend using the documentation from the original page

- [Keycloak](https://www.keycloak.org/)
- [Keycloak_JavaScript_Adapter](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter)
- [Keycloak_Documentation](https://www.keycloak.org/documentation.html)
