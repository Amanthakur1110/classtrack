
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
        screenshot: '/screenshots/screen1.jpeg',
        title: 'Smart Scheduling',
        description: 'Organize your classes with our intuitive automated scheduler.',
        icon: 'calendar',
        color: '#3b82f6', // Blue-500
        gradient: 'from-blue-400 to-cyan-400'
    },
    {
        id: 'sharing',
        screenshot: '/screenshots/screen2.jpeg',
        title: 'Instant Sharing',
        description: 'Share your timetable with friends and classmates in one tap.',
        icon: 'share',
        color: '#f472b6', // Pink-400
        gradient: 'from-pink-500 to-rose-400'
    },
    {
        id: 'reminders',
        screenshot: '/screenshots/screen3.jpeg',
        title: 'Smart Reminders',
        description: 'Never miss a class with customizable notifications and alerts.',
        icon: 'bell',
        color: '#fbbf24', // Amber-400
        gradient: 'from-amber-400 to-orange-500'
    },
    {
        id: 'analytics',
        screenshot: '/screenshots/screen4.jpeg',
        title: 'Attendance Tracking',
        description: 'Keep track of your attendance and manage your academic goals.',
        icon: 'chart',
        color: '#10b981', // Emerald-500
        gradient: 'from-emerald-400 to-green-600'
    },
    {
        id: 'Premium Ui ',
        screenshot: '/screenshots/screen4.jpeg',
        title: 'Premium Ui',
        description: 'Change Color What Ever You Like.',
        icon: 'chart',
        color: '#10b981', // Emerald-500
        gradient: 'from-emerald-400 to-green-600'
    }, {
        id: 'Lofi Focus Mode ',
        screenshot: '/screenshots/screen4.jpeg',
        title: 'Lofi Focus Mode',
        description: 'Study With Your Favourite Lofi Music.',
        icon: 'chart',
        color: '#10b981', // Emerald-500
        gradient: 'from-emerald-400 to-green-600'
    }
];
