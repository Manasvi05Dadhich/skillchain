
pragma solidity ^0.8.0;

contract SkillChain {
    
    address public owner;

    constructor() {
        owner = msg.sender; 
    }


    struct Skill {
        string name;        
        address verifier;    
        uint256 date;       
    }

   
    mapping(address => Skill[]) public userSkills;

  
    event SkillAdded(address indexed user, string skillName, address indexed verifier, uint256 date);

   
    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

   
    function addSkill(address user, string memory skillName) public onlyOwner {
        Skill memory newSkill = Skill(skillName, msg.sender, block.timestamp);
        userSkills[user].push(newSkill);
        emit SkillAdded(user, skillName, msg.sender, block.timestamp);
    }


    function getSkills(address user) public view returns (Skill[] memory) {
        return userSkills[user];
    }
}
