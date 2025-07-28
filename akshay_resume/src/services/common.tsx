const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
import bcrypt from "bcryptjs";

interface ApiResponse {
    status: number;
    status_message: string;
    data?: any;
}

interface Skill {
    name: string;
    id?: number;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getSkills = async (skill?: string, token?: string): Promise<ApiResponse> => {
    try {
        const authToken = token || process.env.API_JWT_TOKEN;

        if (!authToken) {
            return {
                status: 401,
                status_message: "Authentication token required"
            };
        }

        const reqBody = skill ? { 'skill': skill } : {};

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(`${API_BASE_URL}/api/auth/getSkill`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${authToken}`
            },
            body: JSON.stringify(reqBody),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data.status === 200) {
            return {
                status: 200,
                status_message: data.status_message || "Skills fetched successfully",
                data: data.data
            };
        } else {
            return {
                status: data.status || 400,
                status_message: data.status_message || "Failed to fetch skills"
            };
        }

    } catch (error) {
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                return {
                    status: 408,
                    status_message: "Request timeout"
                };
            }
            return {
                status: 500,
                status_message: "Network error occurred"
            };
        }
        return {
            status: 500,
            status_message: "Unknown error occurred"
        };
    }
}


export const UserLogin = async (email: string, password?: string): Promise<ApiResponse> => {
    try {
        if (emailRegex.test(email) && password) {
            const reqBody = {
                "email": email,
                "password": password//bcrypt.hash(password, 8)
            }

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const res = await fetch(`${API_BASE_URL}/api/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            console.log("====res===", res);

            if (data.status === 200) {
                const token = sessionStorage.setItem('authToken', data.data.token)
                return {
                    status: data.status || 200,
                    status_message: data.status_message || "Logged In Successfully!",
                    // data: data.data
                };
            } else {
                return {
                    status: data.status || 400,
                    status_message: data.status_message || "Failed to fetch skills"
                };
            }
        } else {
            return {
                status: 404,
                status_message: "BAD REQUEST"
            };
        }



    } catch (error) {
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                return {
                    status: 408,
                    status_message: "Request timeout"
                };
            }
            return {
                status: 500,
                status_message: "Network error occurred"
            };
        }
        return {
            status: 500,
            status_message: "Unknown error occurred"
        };
    }
}
