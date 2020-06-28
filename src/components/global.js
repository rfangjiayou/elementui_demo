import Vue from 'vue'
import CommonPage from '@/components/common/page.vue'
import Editor from '@/components/editor'
import QEditor from '@/components/anotherEditor'
import { 
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    // DatePicker,
    // TimeSelect,
    // TimePicker,
    Popover,
    Tooltip,
    Avatar,
    // Breadcrumb,
    // BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    // Tree,
    Alert,
    // Slider,
    Icon,
    Row,
    Col,
    Upload,
    // Progress,
    // Spinner,
    // Badge,
    // Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    // ColorPicker,
    // Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    // Timeline,
    // TimelineItem,
    Link,
    Divider,
    Image,
    // Calendar,
    // Backtop,
    PageHeader,
    // CascaderPanel,
    Loading,
    MessageBox,
    Message,
    Notification,
    Scrollbar
} from 'element-ui';

const components = [
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    // DatePicker,
    // TimeSelect,
    // TimePicker,
    Popover,
    Tooltip,
    Avatar,
    // Breadcrumb,
    // BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    // Tree,
    Alert,
    // Slider,
    Icon,
    Row,
    Col,
    Upload,
    // Progress,
    // Spinner,
    // Badge,
    // Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    // ColorPicker,
    // Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    // Timeline,
    // TimelineItem,
    Link,
    Divider,
    Image,
    // Calendar,
    // Backtop,
    PageHeader,
    // CascaderPanel,
    Scrollbar
]

components.map(component => {
    // Vue.component(component.name, component);
    Vue.use(component);
})
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.component('V-Page', CommonPage)
Vue.component('V-Editor', Editor)
Vue.component('Q-Editor', QEditor)

