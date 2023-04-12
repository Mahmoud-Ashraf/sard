import HomeSection from "../../UI/HomeSection/HomeSection";
const HappenedToDayArr = [
    {
        title: "تيست",
        attachments: [
            {
                url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
                type: "video"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
                type: "image"
            }
        ]
    },
    {
        title: "اختبار عنوان كبير للتجربة",
        attachments: [
            {
                url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
                type: "video"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
                type: "image"
            }
        ]
    },
    {
        title: "اختبار عنوان كبير جدا جدا جدا جدا جدا جدا جدا للتجربة والتحقق",
        attachments: [
            {
                url: "https://www.youtube.com/watch?v=EsGkXt6nneE",
                type: "video"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
                type: "image"
            }
        ]
    }
]
const HappenedToDay = () => {
    return (
        <HomeSection title="titles.happendToday" showAll="/">
            <div className="row">
                {
                    HappenedToDayArr.map(post => {
                        return (
                            <div className="col">
                                <div className="happened-today-post">
                                    <img src={post?.attachments?.find(attachment => attachment?.type === 'image')?.url} alt="news cover" />
                                    <h3>{post?.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HomeSection>
    )
}

export default HappenedToDay;