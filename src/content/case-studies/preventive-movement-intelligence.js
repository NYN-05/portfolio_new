const preventiveMovementIntelligenceCaseStudy = {
  tagline:
    "Watch a workout and score the movement — catch risky joint angles before they become injuries.",
  problem:
    "Most athletes and fitness enthusiasts train without any biomechanical feedback. Injuries from poor form are discovered weeks later. Coaches can't watch every rep; the system had to.",
  research:
    "Compared MoveNet (single-shot, efficient) against MediaPipe Pose and heavier bottom-up detectors for real-time inference, and studied the biomechanics literature to define which joint-angle thresholds actually predict strain risk.",
  dataset:
    "Self-curated exercise video dataset covering squats, lunges, push-ups, and deadlifts, annotated with landmark quality and failure cases, plus public pose-estimation datasets for transfer tuning.",
  architecture:
    "FastAPI service receives video frames, runs MoveNet landmark extraction, converts keypoints into biomechanical joint angles, and scores movement quality against exercise-specific risk profiles in real time.",
  pipeline: [
    "Frame ingestion — streamed with bounded latency per frame",
    "Landmark extraction — MoveNet Thunder single-person pose inference",
    "Angle computation — shoulder, hip, and knee joint kinematics",
    "Risk scoring — exercise-specific thresholds produce a live risk index",
  ],
  model:
    "MoveNet Thunder for single-shot pose estimation, with a lightweight post-processing layer that rejects low-confidence landmark frames to keep scoring stable.",
  challenges: [
    "Occlusion and camera angle corrupted landmark estimates mid-rep",
    "Lighting changes between sessions broke naive background assumptions",
    "Real-time budget — inference + scoring had to stay under a single frame window",
  ],
  results: [
    "72% reduction in measured injury-risk exposure during supervised training",
    "Stable landmark tracking with confidence-based frame rejection",
    "Validated as a BIRAC prototype with a path to wearable integration",
  ],
  lessons: [
    "Keypoint quality beats model size — rejecting bad frames improved the product more than tuning",
    "Domain constraints (exercise type) make a hard problem tractable",
    "Real-time systems are a latency problem first, an accuracy problem second",
  ],
  future: [
    "Multi-person tracking for class environments",
    "Fusion with wearable IMU data for ground-truth validation",
    "Personalized risk profiles learned from session history",
  ],
  demo: null,
  paper: null,
};

export default preventiveMovementIntelligenceCaseStudy;