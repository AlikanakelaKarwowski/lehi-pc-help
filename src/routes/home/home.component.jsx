import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
    const categories = [
        {
            id: 1,
            title: "PC Software Issues",
            subtitle: "Get Help Now",
            imageUrl: "https://f.jwwb.nl/public/y/u/j/temp-arcfuygpvyzcakmzcxdu/jq3cmn/Software-1024x586.jpg",
        },
        {
            id: 2,
            title: "PC Hardware Issues",
            subtitle: "Get Help Now",
            imageUrl:
                "http://images.bit-tech.net/content_images/2010/09/pc-hardware-buyer-s-guide-september-2010/scansr2bundle-1280x1024.jpg",
        },
        {
            id: 3,
            title: "Data Recovery",
            subtitle: "Coming Soon",
            imageUrl: "https://transcosmos.co.uk/wp-content/uploads/2015/09/data-recovery-systems.jpg",
        },
        {
            id: 4,
            title: "Help Building a PC",
            subtitle: "Get an Estimate",
            imageUrl:
                "https://thewiredshopper.com/wp-content/uploads/2018/04/What-Do-I-Need-to-Build-a-Gaming-PC-1024x576.jpg",
        },
        {
            id: 5,
            title: "PC Upgrades",
            subtitle: "Get an Estimate",
            imageUrl: "https://jnology.com/wp-content/uploads/2014/11/Computer-Upgrades.jpg",
        },
    ];
    return (
        <div>
            <Directory categories={categories} />
            <Outlet />
        </div>
    );
};

export default Home;
