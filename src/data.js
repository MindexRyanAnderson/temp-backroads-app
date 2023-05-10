import imgTour1 from './images/tour-1.jpeg'
import imgTour2 from './images/tour-2.jpeg'
import imgTour3 from './images/tour-3.jpeg'
import imgTour4 from './images/tour-4.jpeg'


export const pageLinks = [
    {id: 1, href:'#href', text:'home'},
    {id: 2, href:'#about', text:'about'},
    {id: 3, href:'#services', text:'services'},
    {id: 4, href:'#tours', text:'tours'}
]

export const socialLinks = [
    {id: 1, href: "https://wwww.twitter.com", icon: "fab fa-facebook"},
    {id: 2, href: "https://wwww.twitter.com", icon: "fab fa-twitter"},
    {id: 3, href: "https://wwww.twitter.com", icon: "fab fa-instagram"},
]

export const services = [
    {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'}
]

export const tours = [
    {id: 1, img: imgTour1, date:'august 26th, 2020', title:'Tibet Adventure', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location:'china', days: '6 days', cost: '$2100'},
    {id: 2, img: imgTour2, date:'august 28th, 2020', title:'Another Adventure', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location:'Tibet', days: '2 days', cost: '$1100'},
    {id: 3, img: imgTour3, date:'august 30th, 2020', title:'Tibet Adventure somewher else', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location:'fayetville', days: '12 days', cost: '$2100'},
    {id: 4, img: imgTour4, date:'September 10th, 2020', title:'fun time', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location:'denmark', days: '3 days', cost: '$22100'},
]