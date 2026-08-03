import { Fragment } from 'react';

const wedtimeline = () => {
    const schedule = [
        { time: "1:30 PM", event: "Processional", icon: "/icons/arrival.png" },
        { time: "2:00 PM", event: "Wedding Ceremony", icon: "/icons/ceremony.png" },
        { time: "4:00 PM", event: "Photo Shoot", icon: "/icons/photo.png" },
        { time: "4:30 PM", event: "Cocktail Hour", icon: "/icons/cocktail.png" },
        { time: "5:30 PM", event: "First Dance", icon: "/icons/dance.png" },
        { time: "5:45 PM", event: "Cake Cutting", icon: "/icons/cake.png" },
        { time: "6:30 PM", event: "Dinner & Speeches", icon: "/icons/dinner.png" },
        { time: "7:30 PM", event: "Evening Party", icon: "/icons/party.png" },
        { time: "8:30 PM", event: "Carriages", icon: "/icons/carriage.png" },
    ]; 

    return(
        <section className="max-w-2xl mx-auto">
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[1fr_2px_1fr] gap-x-2 md:gap-x-4">
                {schedule.map((item, index) => {
                const isEven = index % 2 === 0;
                const isFirst = index === 0;
                const isLast = index === schedule.length - 1;

                return (
                    <Fragment key={index}>
                        <div className="hidden md:flex items-center justify-end gap-2 text-right">
                            {isEven && (
                            <>
                                <div>
                                    <span className="uppercase italic opacity-70">{item.time}</span>
                                    <h4 className="text-dusty-rose font-serif font-bold">{item.event}</h4>
                                </div>
                                <img src={item.icon} alt={item.event} className="text-xs w-16 h-16 flex-shrink-0" />
                            </>
                            )}
                        </div>

                        <div className="relative flex justify-center">
                            <div className={`w-[2px] bg-dusty-rose 
                            ${isFirst ? "h-1/2 self-end" : ""} 
                            ${isLast ? "h-1/2 self-start" : ""} 
                            ${!isFirst && !isLast ? "h-full" : ""}`} 
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-dusty-rose rotate-45" />
                        </div>

                        <div className="flex items-center justify-start gap-2 text-left py-1">
                            <img src={item.icon} alt={item.event} className={`text-xs w-16 h-16 flex-shrink-0 ${!isEven ? "md:flex" : "md:hidden"}`} />
                            <div className={!isEven ? "md:block" : "md:hidden"}>
                                <span className="uppercase italic opacity-70">{item.time}</span>
                                <h4 className="text-dusty-rose font-serif font-bold">{item.event}</h4>
                            </div>
                        </div>
                    </Fragment>
                    );
                })}
            </div>
        </section>
    )
}

export default wedtimeline