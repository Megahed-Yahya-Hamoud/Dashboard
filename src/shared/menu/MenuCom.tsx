import { Box, Menu, rem, Text } from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
} from "@tabler/icons-react";
import Styles from "./MenuCom.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { RiLogoutCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { LogOut } from "@store/api/AuthApi";
import image from '@assets/Alsafwa/person.png'

export default function MenuCom({ img }: { img: string }) {
  const { AuthModel } = useSelector((state: RootState) => state.Auth);
  const { student } = useSelector((state: RootState) => state.Student);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("enter");
    
    Swal.fire({
      title: "تسجيل الخروج",
      text: "هل تريد تسحيل الخروج!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "تسجيل الخروج",
      cancelButtonText: "إلغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(LogOut());
        navigate("/login");
      }
    });
  };

  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}>
      <Menu.Target>
        <Box display={"flex"} style={{flexWrap:"wrap" , alignItems:"center" , gap:"5px"}}> 

          <Text>احمد كامل</Text>
        <div className={Styles.conImg}>
          <img
          src={image}
            // src={student?.user.fileUploads ? student.user.fileUploads.url : img}
            alt=""
          />
        </div>
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }>
          <Link
            to={`/student-page/${AuthModel?.userId}`}
            className={Styles.LinkStyle}>
            الاعدادت
          </Link>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }>
          الرسائل
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }>
          Gallery
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>

        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }>
          حذف الاكونت
        </Menu.Item>
        <Menu.Item
          color="red"
          onClick={() => {
            console.log("clicked");
            
            handleLogout();
          }}
          leftSection={
            <RiLogoutCircleLine style={{ width: rem(14), height: rem(14) }} />
          }>
          تسجيل الخروج
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
