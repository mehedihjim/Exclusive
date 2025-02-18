import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { AiFillProduct } from "react-icons/ai";
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlineShoppingCart, MdOutlineAddShoppingCart } from "react-icons/md";

export function Sidebar() {
    return (
        <Card className="h-[calc(100vh-0rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="red">
                    Exclusive <span className="text-black">Dashboard</span>
                </Typography>
            </div>
            <List>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Order
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <MdOutlineShoppingCart className="h-5 w-5" />
                    </ListItemPrefix>
                    All Products
                </ListItem>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <MdOutlineAddShoppingCart className="h-5 w-5" />
                    </ListItemPrefix>
                    Add Products
                </ListItem>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <AiFillProduct className="h-5 w-5" />
                    </ListItemPrefix>
                    All Categories
                </ListItem>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <TbCategoryPlus className="h-5 w-5" />
                    </ListItemPrefix>
                    Add Category
                </ListItem>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem className="cursor-pointer">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}