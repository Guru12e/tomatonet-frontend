export const plantDiseaseData = {
  bacterial_spot: {
    cause: {
      pathogen: "Xanthomonas campestris pv. vesicatoria",
      symptoms:
        "Small, dark, water-soaked spots on leaves and fruit that may become necrotic and fall off",
      environment: "Spreads quickly in warm, wet environments",
    },
    fertilizers: {
      purpose: "Support plant health and immune response",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Maintains overall plant health",
            "Prevents excessive nitrogen which can increase disease susceptibility",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Strengthen cell walls, making it harder for bacteria to invade",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Copper", "Zinc"],
          examples: ["Copper sulfate", "Copper hydroxide sprays"],
          benefits: [
            "Copper has antibacterial properties",
            "Zinc boosts enzymatic and immune functions",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Use resistant or tolerant varieties",
        "Practice crop rotation (2–3 years away from solanaceous crops)",
        "Remove infected leaves and plants early",
        "Avoid overhead irrigation",
      ],
      chemical: [
        "Use copper-based bactericides like copper hydroxide (Kocide) or copper oxychloride",
        "Rotate with mancozeb to enhance effectiveness",
      ],
      biological: [
        "Use beneficial microbes such as Bacillus subtilis or Streptomyces",
        "Example product: Serenade (Bacillus-based spray)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for brown/black water-soaked spots",
            "Remove and dispose infected parts away from the field",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Mix Cal-Mag foliar spray or balanced NPK as per dosage",
            "Spray early morning or late afternoon",
          ],
        },
        {
          step: "Apply Copper-Based Bactericide",
          details: [
            "Mix copper hydroxide with water per label",
            "Spray on both upper and lower leaf surfaces",
            "Apply every 7–10 days, especially after rain",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply Bacillus subtilis 3–4 days after copper treatment",
            "Helps reduce resistance and provides biological control",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Stake or cage plants for airflow",
            "Use drip irrigation",
            "Mulch to reduce soil splash-up",
          ],
        },
      ],
    },
  },
  early_blight: {
    cause: {
      pathogen: "Alternaria solani",
      symptoms:
        "Dark brown concentric ring spots on older leaves, yellowing and premature leaf drop",
      environment:
        "Thrives in warm, humid environments and spreads through rain splash and wind",
    },
    fertilizers: {
      purpose: "Support plant health and boost resistance to fungal infections",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Promotes strong vegetative growth and overall plant vigor",
            "Avoids excess nitrogen that can make plants more vulnerable to disease",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Helps maintain strong cell walls and reduce stress-related susceptibility",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Manganese", "Zinc"],
          examples: ["Manganese sulfate", "Zinc chelates"],
          benefits: [
            "Manganese improves disease resistance enzymes",
            "Zinc supports immune and metabolic processes",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Use disease-resistant tomato varieties",
        "Practice crop rotation (avoid tomatoes and potatoes for 2–3 years)",
        "Remove and destroy infected leaves and debris",
        "Avoid overhead watering to reduce leaf wetness",
      ],
      chemical: [
        "Apply fungicides such as chlorothalonil or mancozeb",
        "Use preventive sprays early in the season and after rain",
      ],
      biological: [
        "Apply biofungicides like Trichoderma harzianum or Bacillus amyloliquefaciens",
        "Example product: Double Nickel (Bacillus-based biofungicide)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Check lower/older leaves for dark concentric spots and yellowing",
            "Remove and destroy infected leaves promptly",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Use Cal-Mag foliar spray or balanced NPK as directed",
            "Apply during cooler times of the day (morning or late afternoon)",
          ],
        },
        {
          step: "Apply Fungicide",
          details: [
            "Mix chlorothalonil or mancozeb according to label instructions",
            "Spray thoroughly on upper and lower leaf surfaces",
            "Reapply every 7–10 days or after rainfall",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply Trichoderma or Bacillus-based biofungicides 3–4 days after fungicide",
            "Helps support long-term resistance and soil health",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Provide staking or caging for good air circulation",
            "Use mulch to minimize soil splash",
            "Water at the base of the plant using drip irrigation",
          ],
        },
      ],
    },
  },
  late_blight: {
    cause: {
      pathogen: "Phytophthora infestans",
      symptoms:
        "Large, dark, greasy-looking lesions on leaves, stems, and fruit; white mold under leaf spots in humid conditions",
      environment:
        "Spreads rapidly in cool, moist conditions; disease thrives after extended leaf wetness",
    },
    fertilizers: {
      purpose:
        "Enhance plant immunity and help reduce stress, making plants less prone to infection",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Supports balanced growth and stress tolerance",
            "Prevents nitrogen excess which can promote soft, susceptible tissue",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Strengthens plant cell walls, limiting pathogen entry and spread",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Copper", "Boron"],
          examples: ["Copper sulfate", "Boron chelates"],
          benefits: [
            "Copper has fungicidal properties",
            "Boron helps strengthen tissue and aids in disease resistance",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Use certified, disease-free seeds or transplants",
        "Destroy infected plant residues and avoid planting near potatoes",
        "Rotate crops every 2–3 years with non-hosts like corn or beans",
        "Improve air circulation and avoid working with wet plants",
      ],
      chemical: [
        "Apply fungicides such as copper-based products or chlorothalonil",
        "Use systemic fungicides like metalaxyl in severe cases",
      ],
      biological: [
        "Apply microbial fungicides like Bacillus subtilis or Trichoderma viride",
        "Example product: Serenade or RootShield (Trichoderma-based)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for large, dark lesions on leaves, stems, or fruit",
            "Remove infected parts and destroy them away from the garden",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Spray Cal-Mag or NPK foliar feed as per label dosage",
            "Apply during early morning or late evening to reduce stress",
          ],
        },
        {
          step: "Apply Fungicide",
          details: [
            "Use copper or systemic fungicide like metalaxyl per label instructions",
            "Spray thoroughly on all plant parts, especially undersides of leaves",
            "Reapply every 7–10 days or after rain",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply Bacillus or Trichoderma biofungicide 3–4 days after chemical spray",
            "Helps reduce resistance buildup and promotes long-term suppression",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Stake plants and prune lower leaves to increase airflow",
            "Use mulch to reduce splash from infected soil",
            "Avoid overhead watering; water at the base",
          ],
        },
      ],
    },
  },
  leaf_mold: {
    disease: "Leaf Mold",
    cause: {
      pathogen: "Passalora fulva (formerly Cladosporium fulvum)",
      symptoms:
        "Yellow spots on upper leaf surfaces with olive-green to grayish-purple mold growth underneath; leads to leaf curling and drop",
      environment:
        "Develops in warm, humid conditions with poor air circulation, often in greenhouses or densely planted areas",
    },
    fertilizers: {
      purpose:
        "Improve plant vigor and defense mechanisms against fungal pathogens",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Supports healthy growth and balanced nutrient supply",
            "Avoids excess nitrogen that can lead to dense foliage prone to mold",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Strengthen leaf tissue, helping resist fungal penetration and spread",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Zinc", "Copper"],
          examples: ["Zinc sulfate", "Copper chelates"],
          benefits: [
            "Zinc helps with enzymatic defense responses",
            "Copper contributes antifungal activity and structural integrity",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Grow resistant tomato varieties if available",
        "Ensure adequate spacing and pruning for air circulation",
        "Avoid wetting leaves during irrigation",
        "Sanitize tools and remove infected leaves promptly",
      ],
      chemical: [
        "Apply fungicides like chlorothalonil or copper-based products",
        "Start preventive treatments in high humidity conditions",
      ],
      biological: [
        "Use biofungicides like Bacillus subtilis or Trichoderma harzianum",
        "Example product: Cease (Bacillus-based biofungicide)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for yellow spots on top of leaves and fuzzy mold underneath",
            "Remove and discard infected leaves away from the growing area",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Use Cal-Mag or balanced NPK foliar spray as per recommended dosage",
            "Apply early morning or late afternoon to reduce stress and maximize uptake",
          ],
        },
        {
          step: "Apply Fungicide",
          details: [
            "Mix chlorothalonil or copper fungicide per label instructions",
            "Spray thoroughly on all leaf surfaces, especially undersides",
            "Repeat every 7–10 days or more frequently in humid conditions",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply Bacillus-based biofungicide 3–4 days after chemical spray",
            "Supports natural suppression and reduces chemical reliance",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Prune for airflow and avoid overcrowding",
            "Use fans or ventilation in greenhouses to reduce humidity",
            "Water at the base and avoid splashing onto foliage",
          ],
        },
      ],
    },
  },
  mosaic_virus: {
    disease: "Mosaic Virus",
    cause: {
      pathogen: "Tomato Mosaic Virus (ToMV) or Tobacco Mosaic Virus (TMV)",
      symptoms:
        "Mottled light and dark green mosaic patterns on leaves, leaf curling, distortion, and stunted growth",
      environment:
        "Spreads via contaminated tools, hands, insects, or infected plant material; thrives in warm conditions",
    },
    fertilizers: {
      purpose:
        "Strengthen plant immunity and overall health to reduce susceptibility",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Promotes healthy, vigorous growth that can withstand viral pressure",
            "Avoids over-fertilization which can worsen symptoms",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Reinforces cell structure and helps maintain leaf integrity",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Zinc", "Manganese"],
          examples: ["Zinc sulfate", "Manganese chelates"],
          benefits: [
            "Zinc supports plant defense enzymes",
            "Manganese helps boost resistance to stress and infection",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Use virus-resistant tomato varieties when available",
        "Disinfect tools and hands regularly during pruning or transplanting",
        "Remove and destroy infected plants immediately",
        "Avoid smoking near plants to prevent TMV transmission",
      ],
      chemical: [
        "No chemical cure exists for viruses",
        "Use insecticides to control aphids and whiteflies that can spread viruses",
      ],
      biological: [
        "Use plant-strengthening biostimulants such as seaweed extract or beneficial microbes",
        "Example product: Actinovate (Streptomyces-based biostimulant)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for mottled or mosaic leaf patterns and distorted growth",
            "Remove infected plants immediately and sanitize nearby tools",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Use Cal-Mag or balanced NPK as per guidelines to maintain plant health",
            "Apply early morning or late afternoon to avoid leaf stress",
          ],
        },
        {
          step: "Apply Pest Control (Indirect)",
          details: [
            "Use insecticidal soap or neem oil to manage vectors like aphids and whiteflies",
            "Spray on undersides of leaves and repeat every 7–10 days",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply biostimulants like Actinovate or seaweed extract to boost resistance",
            "Use 3–4 days after pest control treatment",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Avoid handling plants when wet",
            "Sanitize hands and tools between plants",
            "Control weeds which may host the virus or vectors",
          ],
        },
      ],
    },
  },
  powdery_mildew: {
    disease: "Powdery Mildew",
    cause: {
      pathogen: "Oidium lycopersici or Leveillula taurica",
      symptoms:
        "White, powdery fungal growth on leaf surfaces, often starting on older leaves; leads to yellowing, curling, and reduced photosynthesis",
      environment:
        "Favors warm, dry days followed by cool, humid nights; spreads easily in low air circulation",
    },
    fertilizers: {
      purpose:
        "Support healthy plant development and improve resistance to fungal infections",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Maintains overall plant vigor and balances growth",
            "Avoids overly lush foliage that can be more prone to infection",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Strengthen leaf tissues and reduce fungal penetration and spread",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Silicon", "Zinc"],
          examples: ["Potassium silicate", "Zinc chelates"],
          benefits: [
            "Silicon helps harden cell walls and reduce disease susceptibility",
            "Zinc supports enzyme activity and plant immunity",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Choose resistant tomato varieties when possible",
        "Prune lower and dense foliage to increase air circulation",
        "Water at the base to keep foliage dry",
        "Avoid overhead irrigation",
      ],
      chemical: [
        "Use sulfur-based fungicides or potassium bicarbonate sprays",
        "Apply preventive treatments during early signs or ideal conditions",
      ],
      biological: [
        "Use biofungicides containing Bacillus subtilis or Ampelomyces quisqualis",
        "Example product: Serenade ASO (Bacillus-based)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for white, powdery spots on leaf surfaces",
            "Remove infected leaves carefully and discard them far from the growing area",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Apply Cal-Mag or balanced NPK foliar fertilizer per instructions",
            "Best applied early morning or late afternoon",
          ],
        },
        {
          step: "Apply Fungicide",
          details: [
            "Mix and apply sulfur or potassium bicarbonate fungicide per label",
            "Spray thoroughly on both sides of leaves and repeat every 7–10 days",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply Bacillus subtilis biofungicide 3–4 days after chemical fungicide",
            "Helps suppress fungal spores and boost plant defense",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Increase spacing between plants to improve airflow",
            "Remove weeds and debris to reduce humidity and fungal spread",
            "Use mulch to prevent splash and reduce microclimate humidity",
          ],
        },
      ],
    },
  },
  septoria_leaf_spot: {
    disease: "Septoria Leaf Spot",
    cause: {
      pathogen: "Septoria lycopersici",
      symptoms:
        "Small, circular spots with dark brown borders and gray or tan centers on lower leaves; severe infections cause yellowing and premature leaf drop",
      environment:
        "Thrives in warm, wet conditions; spreads via splashing water, tools, and infected debris",
    },
    fertilizers: {
      purpose:
        "Boost plant health and resilience, reducing vulnerability to fungal infections",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Promotes balanced plant growth and vitality",
            "Avoids excess nitrogen that can create overly lush, susceptible foliage",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Strengthens leaf tissues and reduces fungal lesion expansion",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Copper", "Manganese"],
          examples: ["Copper sulfate", "Manganese chelates"],
          benefits: [
            "Copper acts as a fungicide and boosts defense response",
            "Manganese improves resistance to environmental stress and disease",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Use disease-free seeds and resistant tomato varieties",
        "Remove lower infected leaves and practice proper spacing",
        "Rotate crops and avoid planting tomatoes or related crops in the same spot for 2–3 years",
        "Water at the base and avoid splashing",
      ],
      chemical: [
        "Use fungicides like chlorothalonil or copper-based sprays",
        "Begin applications early when conditions are favorable for disease",
      ],
      biological: [
        "Use biofungicides containing Bacillus subtilis or Trichoderma species",
        "Example product: Serenade (Bacillus-based biofungicide)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Check lower leaves for small brown or tan spots with dark margins",
            "Remove and discard affected foliage to slow the spread",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Use Cal-Mag or balanced NPK as directed to strengthen plant defenses",
            "Apply early or late in the day to prevent leaf damage",
          ],
        },
        {
          step: "Apply Fungicide",
          details: [
            "Mix and apply chlorothalonil or copper fungicide following label instructions",
            "Thoroughly spray lower and upper leaf surfaces, reapplying every 7–10 days",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply Bacillus-based biofungicide 3–4 days after chemical treatment",
            "Enhances control and reduces fungal resistance development",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Prune and stake plants to improve air circulation",
            "Remove plant debris and weeds around the base",
            "Mulch to prevent soil splash-up and fungal spread",
          ],
        },
      ],
    },
  },
  target_spot: {
    disease: "Target Spot",
    cause: {
      pathogen: "Corynespora cassiicola",
      symptoms:
        "Brown lesions with concentric rings resembling a target, primarily on older leaves; can cause yellowing, defoliation, and fruit spotting in severe cases",
      environment:
        "Favors warm, humid conditions and poor air circulation; spreads through spores via wind, water, and tools",
    },
    fertilizers: {
      purpose:
        "Support strong plant tissue and improve resistance to fungal invasion",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Supports uniform plant growth and balanced nutrition",
            "Prevents overgrowth that leads to poor airflow and higher infection risk",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Improves leaf toughness and structure, limiting fungal lesion formation",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Copper", "Zinc"],
          examples: ["Copper oxychloride", "Zinc sulfate"],
          benefits: [
            "Copper provides antifungal action and boosts immunity",
            "Zinc enhances enzyme function and helps reduce stress-related susceptibility",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Use resistant or tolerant tomato varieties where available",
        "Avoid overhead watering and increase plant spacing",
        "Remove and destroy infected plant parts promptly",
        "Practice crop rotation with non-host crops",
      ],
      chemical: [
        "Apply fungicides such as chlorothalonil or copper-based sprays",
        "Use mancozeb as a rotational product to prevent resistance",
      ],
      biological: [
        "Apply biofungicides like Bacillus subtilis or Trichoderma harzianum",
        "Example product: Double Nickel (Bacillus-based biofungicide)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for dark spots with target-like concentric rings on older leaves",
            "Remove affected foliage and discard it away from the garden area",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Spray Cal-Mag or balanced NPK nutrients following dosage guidelines",
            "Apply during cooler parts of the day for optimal absorption",
          ],
        },
        {
          step: "Apply Fungicide",
          details: [
            "Use chlorothalonil or copper fungicide per label directions",
            "Spray both leaf surfaces and repeat treatment every 7–10 days",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Apply Bacillus-based biofungicide 3–4 days after chemical application",
            "Helps suppress spore growth and improve long-term control",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Ensure proper spacing and stake plants to boost airflow",
            "Mulch to prevent splash and reduce fungal spread from soil",
            "Keep garden tools clean and dry",
          ],
        },
      ],
    },
  },
  twospotted_spider_mite: {
    disease: "Two-Spotted Spider Mite",
    cause: {
      pathogen: "Tetranychus urticae (a tiny sap-sucking mite)",
      symptoms:
        "Tiny yellow or white specks on leaves, fine webbing on undersides, leaf curling, bronzing, and eventual drop",
      environment:
        "Thrives in hot, dry conditions; spreads rapidly through infested plants, tools, and air currents",
    },
    fertilizers: {
      purpose: "Boost plant vigor and stress tolerance to reduce pest damage",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Promotes healthy growth, helping plants recover from mite damage",
            "Prevents excessive nitrogen that can attract more pests",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Improves cell wall strength and resilience to sucking pests",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Silicon", "Zinc"],
          examples: ["Potassium silicate", "Zinc sulfate"],
          benefits: [
            "Silicon enhances physical barriers against mites",
            "Zinc improves metabolic function and plant stress resistance",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Inspect plants frequently and isolate infested ones early",
        "Spray plants with water to remove mites and webs",
        "Avoid water stress and keep humidity up when possible",
        "Remove and destroy heavily infested leaves",
      ],
      chemical: [
        "Use miticides such as abamectin or spiromesifen",
        "Rotate miticides to prevent resistance buildup",
      ],
      biological: [
        "Introduce predatory mites like Phytoseiulus persimilis or Amblyseius swirskii",
        "Example product: Bio-Mite (containing beneficial predatory mites)",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for stippling (tiny yellow spots), curling, and webbing",
            "Check leaf undersides carefully and remove affected parts",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Use Cal-Mag or balanced NPK to support recovery and resilience",
            "Apply during early morning or late afternoon",
          ],
        },
        {
          step: "Apply Miticide",
          details: [
            "Use abamectin or other miticide according to label directions",
            "Spray thoroughly, especially on leaf undersides",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Release predatory mites 3–4 days after chemical treatment if needed",
            "Use as a follow-up to maintain natural pest control",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Mist plants occasionally to discourage mite buildup in dry weather",
            "Keep weeds under control, as they can harbor mites",
            "Improve airflow and avoid drought stress",
          ],
        },
      ],
    },
  },
  yellow_leaf_curl_virus: {
    disease: "Yellow Leaf Curl Virus",
    cause: {
      pathogen: "Tomato Yellow Leaf Curl Virus (TYLCV)",
      symptoms:
        "Severe leaf curling, yellowing, and stunting; upward cupping of leaves, with a characteristic yellowing along the leaf margins",
      environment:
        "Spreads via whiteflies, thrives in hot and humid conditions, especially during the growing season",
    },
    fertilizers: {
      purpose:
        "Help strengthen plant defenses and overall health to mitigate viral damage",
      types: [
        {
          name: "Balanced NPK Fertilizers",
          examples: ["10-10-10", "14-14-14"],
          benefits: [
            "Promotes balanced growth and overall plant vigor",
            "Prevents excessive nitrogen that could attract more vectors (like whiteflies)",
          ],
        },
        {
          name: "Calcium and Magnesium Supplements",
          examples: ["Cal-Mag foliar sprays"],
          benefits: [
            "Helps reduce stress and strengthens cell walls, making it harder for the virus to spread",
          ],
        },
        {
          name: "Micronutrient Fertilizers",
          focusElements: ["Zinc", "Copper"],
          examples: ["Zinc sulfate", "Copper sulfate"],
          benefits: [
            "Zinc helps boost immune function and enzymatic activity",
            "Copper has antibacterial properties and can help mitigate secondary infections",
          ],
        },
      ],
    },
    controlMethods: {
      cultural: [
        "Use TYLCV-resistant tomato varieties",
        "Eliminate weeds and volunteer tomato plants that can host the virus",
        "Practice good whitefly management through traps and physical barriers",
        "Remove and destroy infected plants early to prevent spread",
      ],
      chemical: [
        "Use insecticides to control whiteflies, such as imidacloprid or insecticidal soap",
        "Apply treatments early to reduce whitefly populations before they transmit the virus",
      ],
      biological: [
        "Introduce natural predators of whiteflies, such as Encarsia formosa (a parasitic wasp)",
        "Use reflective mulches to repel whiteflies and reduce virus transmission",
      ],
    },
    treatmentRoutine: {
      frequency: "Weekly",
      steps: [
        {
          step: "Inspect Plants",
          details: [
            "Look for curled, yellowing leaves, and stunted growth",
            "Check for whiteflies on the undersides of leaves using a sticky trap or manual inspection",
          ],
        },
        {
          step: "Apply Nutrient Spray",
          details: [
            "Use Cal-Mag or balanced NPK to promote strong, healthy growth",
            "Apply during cooler parts of the day to avoid stress on the plants",
          ],
        },
        {
          step: "Apply Insecticide",
          details: [
            "Use insecticidal soap or imidacloprid as per label instructions to reduce whitefly populations",
            "Ensure thorough coverage, especially on the undersides of leaves",
          ],
        },
        {
          step: "Use Biological Agents",
          optional: true,
          details: [
            "Release natural predators like Encarsia formosa to control whitefly populations",
            "Consider using reflective mulches around plants to deter whiteflies",
          ],
        },
        {
          step: "Manage Environment",
          details: [
            "Install insect-proof netting or screens to protect plants from incoming whiteflies",
            "Practice crop rotation and avoid growing tomatoes or related plants in the same location year after year",
          ],
        },
      ],
    },
  },
};
