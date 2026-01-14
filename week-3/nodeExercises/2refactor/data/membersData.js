function addMembers(membersArr) {
    membersArr.push({ id: 101, name: "Alice Johnson", membershipType: "Premium" });
    membersArr.push({ id: 102, name: "Bob Smith", membershipType: "Basic" });
    membersArr.push({ id: 103, name: "Eve Williams", membershipType: "Premium" });
}

module.exports = { addMembers };