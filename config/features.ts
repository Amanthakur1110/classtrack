
export interface Feature {
    id: string;
    screenshot: string;
    title: string;
    description: string;
    icon: string;
    color: string; // Hex for glow/shadows
    gradient: string; // CSS class for text gradient
}

export const APP_FEATURES: Feature[] = [
    {
        id: 'schedule',
        screenshot: 'https://i.postimg.cc/8k4sMsjq/home-blue.jpg',
        title: 'Smart Scheduling',
        description: 'Organize your classes with our intuitive automated scheduler.',
        icon: 'calendar',
        color: '#3b82f6', // Blue-500
        gradient: 'from-blue-400 to-cyan-400'
    },
    {
        id: 'sharing',
        screenshot: 'https://i.postimg.cc/kMsDKD2P/home-green.jpg',
        title: 'Instant Sharing',
        description: 'Share your timetable with friends and classmates in one tap.',
        icon: 'share',
        color: '#11df56ff', // Pink-400
        gradient: 'from-pink-500 to-rose-400'
    },
    {
        id: 'reminders',
        screenshot: 'https://i.postimg.cc/9XbzZzD5/home-grey.jpg',
        title: 'Smart Reminders',
        description: 'Never miss a class with customizable notifications and alerts.',
        icon: 'bell',
        color: '#c4c2beff', // Amber-400
        gradient: 'from-amber-400 to-orange-500'
    },
    {
        id: 'analytics',
        screenshot: 'https://i.postimg.cc/HWzjXjV2/attendence.jpg',
        title: 'Attendance Tracking',
        description: 'Keep track of your attendance and manage your academic goals.',
        icon: 'chart',
        color: '#40cf08ff', // Emerald-500
        gradient: 'from-emerald-400 to-green-600'
    },
    {
        id: 'Premium Ui ',
        screenshot: 'https://i.postimg.cc/9Ff0pV7K/setting.jpg',
        title: 'Premium Ui',
        description: 'Change Color What Ever You Like.',
        icon: 'chart',
        color: '#34c508ff', // Emerald-500
        gradient: 'from-emerald-400 to-green-600'
    }, {
        id: 'Lofi Focus Mode ',
        screenshot: 'https://i.postimg.cc/ZKqncZdg/lofimode.jpg',
        title: 'Lofi Focus Mode',
        description: 'Study With Your Favourite Lofi Music.',
        icon: 'chart',
        color: '#1967dbff', // Emerald-500
        gradient: 'from-emerald-400 to-green-600'
    }

];
