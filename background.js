chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "drink_water",
            {
                type: "basic",
                iconUrl: "hello_extensions.png",
                title: "Stay Hydrated",
                message: "Have a sip of water human!",
                silent: false
            },
            () => { return true}
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    console.log(addMinutes(new Date(), 5));
    chrome.alarms.create(
        "drink_water",
        {
            when: addMinutes(new Date(), 5),
            // delayInMinutes: 1,
            // periodInMinutes: 1
        }
    );
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000).getTime();
}