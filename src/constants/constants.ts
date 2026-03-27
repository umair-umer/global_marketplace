import { Platform } from "react-native";

// API Configuration
const API = {
  // BASE_URL: 'https://towing-backend-production.up.railway.app',
  // BASE_URL: 'https://movca.gtt-us.com/server',
  SOCKET_URL: 'ws://192.168.1.14:3000', // WebSocket endpoint

  // SOCKET_URL: 'https://movca.gtt-us.com/server',
  BASE_URL: 'http://192.168.1.14:3000', // Update this IP to your backend laptop's IP
  // BASE_URL: 'http://157.230.200.208:3000',
  TIMEOUT: 50000, // Timeout in milliseconds
  ENDPOINTS: {

    CUSTOMERSIGNUP: '/auth/register/customer',
    CUSTOMERLOGIN: '/auth/login',
    CREATERIDE: '/rides',
    DRIVERSIGNUP: '/auth/register/driver',
    // CREATEPAYMENT: '/stripe/create-payment-intent',
    CREATEPAYMENT: '/stripe/create-escrow-ride-payment',
    UPDATERIDE: '/rides',
    UPDATEPAYMENT: '/rides/update-payment',
    GETONLINEDRIVERS: '/drivers/online-drivers',
    FORGETPASSWORD: '/auth/forget-password',
    VERIFYCODE: '/auth/verify-reset-code',
    CHANGEPASSWORD: '/auth/reset-password-with-code',
  },
};

// Screen Names
const SCREENS = {
  SPLASH: "SplashScreen",
  ONBOARDING: "OnboardingScreen",
  // LOGIN: "LoginScreen",
  // REGISTER_WITH_PHONENO: "RegisterWithPhoneNo",
  // DRAWER_NAVIGATOR: "DrawerNavigator",
  // TAB_NAVIGATOR: 'TabNavigator',
  // OTP_VERIFICATION: "OTPVerificationScreen",
  // CREATE_ACCOUNT: "CreateAccount",
  // HOME: 'HomeScreen',
  // CONNECTIONS: 'ConnectionsScreen',

};

// Colors
const COLORS = {
  TRANSPARENT: "transparent",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
};


// Fonts
const FONTS = {
  REGULAR: "SF Pro Rounded Regular",
  LIGHT: "SF Pro Rounded Light",
  MEDIUM: "SF Pro Rounded Medium",

};

const COMMON_DATA = {
  // ENGLISH_LANG: 'english' as const,
  // DEVICE_TYPE: Platform.OS.toUpperCase() as 'IOS' | 'ANDROID' | 'WEB',
  // PAGGING_COUNT: 10,

  // // Terms & privacy link
  // PRIVACY_LINK: 'https://sortapp.mobileapphero.com/privacy-policy',
  // TERMS_LINK: 'https://sortapp.mobileapphero.com/terms-and-conditions',
};

const SOCIAL_DETAIL = {
  // FB_CLIENT_ID: '',
  // FB_CLIENT_SECERET: '',
  // FB_REQUEST: '',
  // GOOGLE_WEB_CLIENT_ID: '',
};

// App Configurations
const CONFIG = {


  APP_NAME: "Stampit",
  VERSION: "1.0",
  SUPPORT_EMAIL: "support@example.c",
  DEBUG_MODE: __DEV__,
};

// Redux Actions
const ACTIONS = {
  APP: {
    SET_USER: 'set_user',
    SET_TOKEN: 'set_token',
    SET_DRAFT: 'set_draft',
    SET_LOGIN: 'set_login',
    SET_USER_CONNECTIONS: 'set_user_connections',
    SET_USER_CONNECTION_REQUESTS: 'set_user_connectionsrequest',
    SET_USER_INVITE: 'set_user_invite'
  },
  HANDLER: {
    GET_DEVICES_INFO: 'get_devices_info',
    SHOW_ALERT: 'show_alert',
    HIDE_ALERT: 'hide_alert',
    SET_CONNECTION_INVITATION_CODE: 'set_user_invitation',
    SET_UNSAVED_CHANGES: 'set_unsaved_changes'

  },

};

export { API, SCREENS, COLORS, FONTS, COMMON_DATA, SOCIAL_DETAIL, CONFIG, ACTIONS }