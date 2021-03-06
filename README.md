# project-3 // JAMSESSION
Group Members: Alleene Lacaba, Chuan-Yao Lin, John Durasko, Kyle Wynne, Samuel Ebersole


PRODUCT VISION:
FOR People of all skill levels interested in creating music 
WHO need a platform to create collaborative music The Jam Session is an Audio Collaboration Software 
THAT provides an interactive, easy to use interface that allows users to collaborate with each other to create music 
UNLIKE other online DAWs, such as Bandlab and SongCollab,
JamSession expands on a social media style platform that allows users to share tracks and have other users add on to them. 
OUR PRODUCT Jam Session is made specifically to be a social network based on improvisational musical collaboration with strangers.

# Docker
Once you have docker installed you can pull and run the container using the following steps:
1. docker pull kwynne99/jamsession
2. docker run -d -it -p 80:80/tcp --name react-app kwynne99/jamsession
3. Open http://localhost in browser.

# MOCKUP: INSTALL AND RUN
Note: NodeJS is a prerequisite required to use this program. Download at https://nodejs.org/en/

1. cd into ./mockup
2. run npm install
3. run npm start


# Layered Software Architecture

**Most Important Qualites**
- Non-functional Product Characteristics

Non-functional product characteristics are important. We need to ensure our product has good performance otherwise it will drive away users. Security is also extremely      important as we strive to be a social media platform which will house users information which needs to remain safe. If there is a security compromise it could cause users to not want to use our product.

- Number of Users

Number of users is an important quality. JAM SESSION is to be used as a social media platform which needs to prepare for a large amount of users. Number of users needs to be considered to prevent performance degradation. If possible we should consider designing our architecture that allows for the ability to quickly scale up and down.

# Architecture Design

**User Interface**

 | Web Browser | Mobile Browser | Mobile App |
 | :-: | :-: | :-: |
 
**User Authentication and User Interaction Management**

 | Login | Interface creation (users customized homepage) | Interface Delivery (React native) |
 | :-: | :-: | :-: |
 
**Application-specific Functionality**

 | Posting (uploading and/or recording music) | Commenting on posts | Browsing/Searching Musicians/Artists |
 | :-: | :-: | :-: |

**Basic Shared Services**

| Search | User Storage |
| :-: | :-: |

**Transaction and Database Management**

| NoSQL Database |
| :-: |

# Technologies To Be Used
- NoSQL (MongoDB - Store comments, media file link, likes and other analytics)
- React Native (ReactJS)
- Express.js (Handle routing)
- Cloud Based Server (Firebase for Storage and User Authentication)
- Axios (Connect the backend, data retrieval, and front-end, user interface interaction)
