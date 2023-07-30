import React, {useEffect, useState} from 'react';
import DropDown from "./dropDown";
import MakeGroup from "../../../img/makingGroup.svg";
import Footer from "../../footer/footer";
import NavBar from "../../navBar/navBar";
import NoGroup from "../noGroup/noGroup";
import "./newGroupPage.css"

const NewGroupPage = () => {
    const [data, setData] = useState([
        {
            id: "1",
            groupName: "هوافضا",
            group_members:
                [{
                    name: "مهدیه",
                    last_name: 'رعیتی',
                    national_code: "0023592168",
                    job: "",
                    education: "",
                    major: "",
                    university: "",
                    graduated: '',
                }, {
                    name: "فاطمه",
                    last_name: 'پاک مهر',
                    national_code: "0023592167",
                    job: "",
                    education: "",
                    major: "",
                    university: "",
                    graduated: '',
                }]
        }, {
            id: "2",
            groupName: "برنامه نویسی",
            group_members:
                [{
                    name: "عارفه",
                    last_name: 'عطایی',
                    national_code: "0023592166",
                    job: "",
                    education: "",
                    major: "",
                    university: "",
                    graduated: '',
                }, {
                    name: "عارفه",
                    last_name: 'زالی',
                    national_code: "0023592167",
                    job: "",
                    education: "",
                    major: "",
                    university: "",
                    graduated: '',
                }]
        },
        ])

    useEffect(() => {
        //back-end
        //     async function getInformation() {
        //         const result = await axios.get("https://reqres.in/api/users")
        //         setData(result.data.data[0]);
        //     }
        //     getInformation();
    }, [])

    const removeMember = (gid, mid) => {
        if (window.confirm('آیا از حذف این فرد اطمینان دارید؟')) {
            const index = data.findIndex(object => object.id === gid);
            const newGroup = {...data[index]}
            const newGroups = [...data];

            const members = data[index].group_members.filter(g => g.national_code !== mid);
            newGroup.group_members = members;
            newGroups[index] = newGroup;
            setData(newGroups)
        }
    }

    const removeGroup = (gid) => {
        if (window.confirm('آیا از حذف این گروه اطمینان دارید؟')) {
            const newGroups = data.filter(g => g.id !== gid)
            setData(newGroups)
        }
    }

    const makeNewGroup = () => {
        const copy = [...data];
        const newGroup = {
            id: "",
            groupName: "",
            group_members: []
        }
        copy.push(newGroup);
        setData(copy);
    }

    const changeName = (gid, e) => {
        const index = data.findIndex(object => object.id === gid);
        const newGroups = [...data];
        newGroups[index].groupName = e.currentTarget.value;
        setData(newGroups)
    }

    return (
        <div className="newGroup">
            <NavBar/>

            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 my-5 groupsContainer">
                        <div className="row">

                            <div className="title col-12 text-center mt-5 mb-4">
                                ایجاد و مدیریت گروه
                            </div>
                        </div>

                        {!(data.length===0) ? (
                            <>
                                <div className="row">

                                    {data.map((item) => {
                                        return <div key={item.id}>
                                            <DropDown data={item} setData={setData} removeMember={removeMember}
                                                      removeGroup={removeGroup} changeName={changeName}/>
                                        </div>
                                    })}

                                </div>

                                <button className="col-6 offset-3 col-md-4 offset-md-4 col-lg-2 offset-lg-5 mt-4 mb-5"
                                        onClick={makeNewGroup}>
                                    ایجاد گروه جدید
                                </button>


                                <div className="col-12 text-center">
                                    <img src={MakeGroup}/>
                                </div>
                            </>
                        ) : (<NoGroup makeGroup={makeNewGroup}/>)}

                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
};

export default NewGroupPage;