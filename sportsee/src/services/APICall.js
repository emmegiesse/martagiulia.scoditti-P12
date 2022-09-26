import axios from 'axios';
import { USER_MAIN_DATA } from './APIMock';
import { USER_ACTIVITY } from './APIMock';
import { USER_AVERAGE_SESSIONS } from './APIMock';
import { USER_PERFORMANCE } from './APIMock';

const instance = axios.create({
    method: "GET",
    baseURL: 'http://localhost:3000/',
});

/**
* Gets user infos from the API
* @param {string} id - > User id
* @returns {object} - > Response
*/
async function getUserInfos(id) {
    let data = null
    try {
        if (process.env.NODE_ENV == "production"){
            const response = await instance.get(`user/${id}`);
            data = response.data.data
        } else {
            data = USER_MAIN_DATA.find (el => el.id == id); 
        }
        if (data) {
            return data 
        } else {
            throw new Error("404")
        }
    } catch (error) {
        console.log(error);
        throw error
    }
};

/**
* Gets user activity infos from the API
* @param {string} id - > User id
* @returns {object} - > Response
*/
async function getUserActivity(id) {
	try {
		if (process.env.NODE_ENV == "production"){
		    const response = await instance.get(`user/${id}/activity`);
			return response.data.data;
		} else {
			let data = USER_ACTIVITY.find (el => el.userId == id); 
			return data
		}
	} catch (error) {
	    console.log(error);
	}
};

/**
* Gets user average sessions infos from the API
* @param {string} id - > User id
* @returns {object} - > Response
*/
async function getUserAverageSessions(id) {
	try {
		if (process.env.NODE_ENV == "production"){
			const response = await instance.get(`user/${id}/average-sessions`);
			return response.data.data;
		} else {
			let data = USER_AVERAGE_SESSIONS.find (el => el.userId == id); 
			return data
		}
    } catch (error) {
		console.log(error);
	}
};

/**
* Gets user performance infos from the API
* @param {string} id - > User id
* @returns {object} - > Response
*/
async function getUserPerformance(id) {
    try {
        if (process.env.NODE_ENV == "production"){
            const response = await instance.get(`user/${id}/performance`);
            return response.data.data;
        } else {
            let data = USER_PERFORMANCE.find (el => el.userId == id); 
            return data
        }
    } catch (error) {
        console.log(error);
    }
};

export { 
    getUserInfos, 
    getUserActivity, 
    getUserAverageSessions, 
    getUserPerformance
};

