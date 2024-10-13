import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';

const BannerSidebar = () => {
    return (
        <div className='pt-[40px] w-[20%]'>
            <Sidebar className='text-base '
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: 'white',
                        menuItemStyles: '16px',
                        fontSize: '14px',
                        width: '233px'
                    },
                }}
            >
                <Menu className='py-0'>
                    <SubMenu label="Woman’s Fashion">
                        <MenuItem>New in Women</MenuItem>
                        <MenuItem>Gifts</MenuItem>
                        <MenuItem>Handbags</MenuItem>
                        <MenuItem>Clothing</MenuItem>
                    </SubMenu>
                    <SubMenu label="Men’s Fashion">
                        <MenuItem>New in Men</MenuItem>
                        <MenuItem>Gifts</MenuItem>
                        <MenuItem>Handbags</MenuItem>
                        <MenuItem>Clothing</MenuItem>
                    </SubMenu>
                    <MenuItem>Electronics</MenuItem>
                    <MenuItem>Home & Lifestyle</MenuItem>
                    <MenuItem>Medicine</MenuItem>
                    <MenuItem>Sports & Outdoor</MenuItem>
                    <MenuItem>Baby’s & Toys</MenuItem>
                    <MenuItem>Groceries & Pets</MenuItem>
                    <MenuItem>Health & Beauty</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default BannerSidebar
