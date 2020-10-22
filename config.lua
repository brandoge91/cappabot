local config = {
  token = "NzY4MTc5NDQ4ODIxMzE3NzAy.X48s3A.BL4oDekILw5Fm6rGBrmYjPUKd0U", -- The TOKEN of your Discord bot. (Keep this a secret.)
  prefix = "!", --// The command prefix for the bot.
  game = "with lua#2000", --// What should the bot's playing status be?
  verifiedRole = "767937391662858240", --// Role ID in string form, one verified role allowed.
  permReply = true, --// Should the bot reply telling a member they don't have enough permissions if they don't?
  perms = {
    adminRole = "768611349063270402", --// Role ID of the Bot Admin role.
    modRole = "768611408995811398", --// Role ID of the Bot Moderator role.
    users = {{"276294288529293312","admin"}}, --// User IDs of forced permissions and the type. ("admin" or "mod")
  },
  groupId = 8116720,
  bindings = {
    [255] = "767937442002632774",
    [254] = "767936329194537000",
    [253] = "767936445083418686",
    [252] = "767937395844448266",
    [251] = "767937391968911411",
    [250] = "767937200071245866",
    [249] = "767936971410243584",
    [248] = "767937393080401939",
    [247] = "767936593570037761",
    [246] = "767937394779095040",
    [245] = "767937394912526378",
    [8] = "767937391012610119",
    [7] = "767937388499828736",
    [6] = "767937366731128852",
    [5] = "767937277002252298",
    [4] = "767937166352973834",
    [3] = "767936814300004352",
    [2] = "767936232797110332",
    [1] = "767936191995576320"
    
    --[Rank ID] = "Role ID",
  }
}

return config