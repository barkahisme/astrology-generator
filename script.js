const getFinanceMessage = () => {
    const financeMessages = [
        "A surprise financial boost is on its way—keep an eye on your inbox and pockets!",
        "Your creativity will open new money-making opportunities soon!",
        "A small investment today could turn into something big in the near future!",
        "Your hard work is paying off—abundance is knocking at your door!",
        "A lucky break will bring unexpected financial rewards—trust the process!",
        "New sources of income are coming—stay open to fresh ideas!",
        "An exciting career shift could lead to bigger earnings—stay confident!",
        "Your money mindset is shifting—abundance is becoming your reality!",
        "A financial lesson learned in the past will now lead you to success!",
        "That dream purchase? You’re closer to affording it than you think!",
        "Your savings will soon reach a milestone—celebrate your progress!",
        "A side hustle or passion project could turn into a major income source!",
        "Opportunities for financial growth are all around you—just say yes!",
        "An unexpected discount or gift will put a smile on your face soon!",
        "Your generosity will come back to you in surprising and wonderful ways!",
        "Your skills are valuable—someone will soon pay you what you’re truly worth!",
        "Your financial future is bright—prosperity is just around the corner!",
        "A wise financial decision today will create lasting wealth for you!",
        "The universe is aligning to bring more financial stability into your life!",
        "Success is in your future—your bank account is about to feel the love!"
      ];
    
    const randomizer1 = Math.floor(Math.random() * financeMessages.length);
    return financeMessages[randomizer1];
};

const getLoveMessage = () => {
    const loveMessages = [
        "Someone special is thinking about you right now—love is in the air!",
        "A heartwarming conversation will bring you closer to someone you admire!",
        "Your love life is about to get a delightful twist—expect romance soon!",
        "A small act of kindness will lead to a big romantic surprise!",
        "Love is already on its way to you—just keep your heart open!",
        "You are magnetic—someone is about to fall for your charm!",
        "A soulmate connection is closer than you think—trust divine timing!",
        "Your love life is getting an upgrade—more laughter, passion, and joy!",
        "A meaningful connection will soon remind you how beautiful love is!",
        "An unexpected gesture from a loved one will make your heart melt!",
        "Self-love is your superpower, and it’s making you even more attractive!",
        "A romantic adventure is in store—get ready for some unforgettable moments!",
        "Your heart is healing, making space for the love you truly deserve!",
        "A new spark will ignite soon—love is blossoming in your life!",
        "Your confidence is growing, and so is your romantic energy!",
        "The love you seek is seeking you—get ready for a beautiful encounter!",
        "A loving surprise will remind you how cherished you truly are!",
        "Your kindness will attract someone who appreciates you deeply!",
        "Love is in your destiny, and the journey there will be filled with joy!",
        "The stars say: Your next romantic chapter is going to be amazing!"
      ];

      const randomizer2 = Math.floor(Math.random() * loveMessages.length);
      return loveMessages[randomizer2];
};

const getFriendshipMessage = () => {
    const friendshipMessages = [
        "A friend will surprise you with a heartfelt message today!",
        "Your circle is filled with love—expect an unforgettable memory soon!",
        "A fun and spontaneous adventure with friends is coming your way!",
        "Someone truly appreciates your presence—your friendship means the world!",
        "New connections will bring laughter, joy, and lifelong memories!",
        "A long-lost friend might reach out, bringing back warm nostalgia!",
        "Your kindness will be returned tenfold by a caring friend!",
        "A fun invitation is coming—say yes and enjoy the magic of friendships!",
        "A simple conversation will turn into an unforgettable bonding moment!",
        "Your energy is contagious—people love having you around!",
        "A new friendship is forming—get ready for someone who truly understands you!",
        "Your best friend has a little surprise planned just for you!",
        "A small act of kindness will strengthen your friendships even more!",
        "An old inside joke will bring a big laugh today!",
        "Your friend group is about to grow in the best way possible!",
        "A heart-to-heart chat will bring you closer to someone special!",
        "A new adventure with friends will create a memory you'll cherish forever!",
        "Your presence brings light to those around you—people love your vibe!",
        "An unexpected compliment from a friend will brighten your day!",
        "Good times with friends are ahead—get ready for laughter and love!"
      ];
    
    const randomizer3 = Math.floor(Math.random() * friendshipMessages.length);
    return friendshipMessages[randomizer3];
};

const getHealthMessage = () => {
    const healthMessages = [
        "Your body and mind are in sync—today is a day of balance and well-being!",
        "A new healthy habit will bring you more energy than ever before!",
        "Your commitment to self-care is paying off—you’re glowing!",
        "Laughter is the best medicine, and you’re about to get a big dose of it!",
        "A small change in your routine will make you feel even more vibrant!",
        "Your body loves you—treat it with kindness, and it will reward you!",
        "A deep breath and a moment of mindfulness will refresh your spirit!",
        "A great night’s sleep is on the horizon—rest and recharge!",
        "Movement is joy—your body will thank you for that extra stretch or walk!",
        "A delicious and healthy meal will leave you feeling fantastic today!",
        "Your immune system is strong—keep fueling it with positivity and good vibes!",
        "A happy mind leads to a happy body—do something that brings you joy!",
        "Your energy levels are about to rise—feel the boost and embrace the day!",
        "Your inner glow is shining—people are noticing your radiance!",
        "Self-care isn’t selfish, and today is the perfect day to pamper yourself!",
        "A small act of gratitude will uplift your mental and emotional health!",
        "Your health journey is beautiful—keep going at your own pace!",
        "Your body is healing, growing, and getting stronger every single day!",
        "A refreshing break will clear your mind and restore your focus!",
        "Today is a day to celebrate how amazing your body and mind truly are!"
      ];

      const randomizer4 = Math.floor(Math.random() * healthMessages.length);
      return healthMessages[randomizer4];
};

const getName = 'Barkah';

const fateForThisMonth = {
    welcome: `Halo ${getName}! this is your fate for this month:`,
    finance: `💰 ${getFinanceMessage()}`,
    love: `❤️ ${getLoveMessage()}`,
    friendship: `🎉 ${getFriendshipMessage()}`,
    health: `🌿 ${getHealthMessage()}`
};

console.log(fateForThisMonth);