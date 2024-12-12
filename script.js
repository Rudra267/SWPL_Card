
const profileLink = "https://card.linkconnect.in/bokaria-wirenetting-industries";

function copyToClipboard() {
    navigator.clipboard.writeText(profileLink).then(() => {
        alert("Link copied to clipboard!");
    });
}

function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: "Profile",
            url: profileLink
        }).catch((error) => console.error("Error sharing:", error));
    } else {
        alert("Share not supported on this browser.");
    }
}

// Save QR Functionality
const qrCodeImage = document.getElementById("qrCode");
const saveQRLink = document.getElementById("saveQR");
saveQRLink.href = qrCodeImage.src;

// Share to WhatsApp Functionality
function shareToWhatsApp() {
    const number = document.getElementById("whatsappNumber").value;
    if (number) {
        const whatsappUrl = `https://wa.me/${number}?text=Check out this profile: ${encodeURIComponent(profileLink)}`;
        window.open(whatsappUrl, "_blank");
    } else {
        alert("Please enter a valid WhatsApp number.");
    }
}