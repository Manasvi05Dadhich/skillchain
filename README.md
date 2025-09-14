# SkillChain: Proof of Skills, Powered by Blockchain  

**Team Name:** m&M  
**Tagline:** Proof of Skills, Powered by Blockchain  

---

## 🚨 The Problem  

Resumes are often unreliable, with over 40% containing false or exaggerated information. This creates several issues:  

- ⏳ **Slow & Costly Verification:** Recruiters spend 23+ hours per hire on validating skills through tests, interviews, and background checks.  
- 🎯 **Overlooked Talent:** Students and professionals with real project-based skills fail to stand out because they lack verifiable proof.  
- 🌍 **No Universal System:** LinkedIn endorsements or MOOC certificates are easily faked and lack true credibility.  

---

## 💡 The Solution: SkillChain  

SkillChain is an **AI + Blockchain-powered platform** that creates **verifiable, tamper-proof credentials** for real-world skills.  

It works by:  
- 🤖 **AI Skill Verification:** AI analyzes submitted projects to assess authenticity and contribution.  
- 👩‍⚖️ **Mentor Review:** Verified professionals review projects and earn rewards for fair evaluation.  
- 🏅 **Blockchain Skill Badges:** Once validated, skills are minted as NFTs (ERC-721) on Polygon, making them **immutable & fraud-proof**.  
- 🔗 **On-Chain Proof:** Each badge is linked to project metadata stored on **IPFS**, ensuring transparent records.  
- 📲 **Seamless Integration:** Recruiters can verify via **blockchain explorers, APIs, or QR codes** on resumes/LinkedIn.  

---

## 🔄 How It Works  

```mermaid
flowchart TD
    A([📝 User submits project/proof]):::user 
    B([🤖 AI analyzes & generates skill summary]):::ai
    C{👩‍⚖️ Mentors/Peers verify authenticity}:::review
    D([🏅 Skill Badge minted as NFT on Polygon]):::nft
    E([💼 Employers/Clients validate via blockchain]):::employer

    A --> B --> C --> D --> E

    classDef user fill:#ffeb99,stroke:#333,stroke-width:2px,color:#000;
    classDef ai fill:#c9eaff,stroke:#333,stroke-width:2px,color:#000;
    classDef review fill:#ffd6cc,stroke:#333,stroke-width:2px,color:#000;
    classDef nft fill:#d6f5d6,stroke:#333,stroke-width:2px,color:#000;
    classDef employer fill:#e6ccff,stroke:#333,stroke-width:2px,color:#000;
