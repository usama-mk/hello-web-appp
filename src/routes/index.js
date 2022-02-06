import Contacts from "../pages/Contacts/Contacts";
import ChatIcon from "../components/CSidebar/Icons/ChatIcon";
import ContactIcon from "../components/CSidebar/Icons/ContactIcon";
import CalendarIcon from "../components/CSidebar/Icons/CalendarIcon";
import TodoIcon from "../components/CSidebar/Icons/TodoIcon";
import Meetings from "../pages/Meeting/Meeting";
import Settings from "../pages/Settings/Settings";
import TodoContainer from "../pages/TodoContainer/TodoContainer";
import Schedule from "../pages/Schedule/Schedule";


export const DashboardRoutes = {
	Chats: {path:"/", exact:true, component: Contacts,title: "Chats", icon: ChatIcon}, 
	Contacts: {path:"/contacts", exact:true, component: Contacts,title:"Contacts", icon: ContactIcon}, 
	Calendar: {path:"/calendar", exact:true, component: Schedule,title:"Calendar", icon: CalendarIcon}, 
	Todo: {path:"/todo", exact:true, component: TodoContainer,title:"To-do", icon: TodoIcon}, 
	WebMeetings: {path:"/web-meetings", exact:true, component: Meetings,title:"Web Meetings", hidden: true}, 
	Settings: {path:"/settings", exact:true, component: Settings,title:"Settings", hidden: true}, 
};
